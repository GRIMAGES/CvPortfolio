import pkg from "pg";
import nodemailer from "nodemailer";

const { Pool } = pkg;

export const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing fields" }),
      };
    }

    console.log("📩 Incoming message:", { name, email, message });

    // 1️⃣ Connect to Supabase/Postgres
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Needed for Supabase
    });

    try {
      await pool.query(
        "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)",
        [name, email, message]
      );
      console.log("✅ Message saved to DB");
    } catch (dbError) {
      console.error("❌ Database error:", dbError);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: "DB insert failed" }),
      };
    } finally {
      await pool.end();
    }

    // 2️⃣ Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Notify YOU
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Message from Portfolio",
        text: `📩 New message from ${name} (${email}):\n\n${message}`,
      });

      // Auto-reply to USER
      await transporter.sendMail({
        from: `"William Portfolio" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thanks for reaching out! 🙌",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #111; color: #f5f5f5; border-radius: 10px;">
            <h2 style="color:#fff;">Hey ${name},</h2>
            <p style="color:#ccc;">Thanks for contacting me! I’ve received your message and will get back to you soon. ✨</p>
            <div style="margin:20px 0; padding:15px; background:#222; border-left:4px solid #555;">
              <p style="margin:0; color:#bbb;"><strong>Your Message:</strong><br>"${message}"</p>
            </div>
            <p style="color:#999;">Best regards,<br><strong>William</strong></p>
          </div>
        `,
      });

      console.log("📧 Emails sent successfully");
    } catch (mailError) {
      console.error("❌ Email error:", mailError);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: "Email failed" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message saved & emails sent!" }),
    };
  } catch (err) {
    console.error("🔥 General error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
