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

    // Connect to Supabase Postgres
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // ✅ Needed for Supabase
    });

    try {
      // Debug: test connection
      const test = await pool.query("SELECT NOW()");
      console.log("⏱ DB Connected at:", test.rows[0]);

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

    // Setup email transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Notify you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: `From: ${name} (${email})\n\n${message}`,
    });

    // Auto-reply
    await transporter.sendMail({
      from: `"William Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 🙌",
      html: `<p>Hi ${name},</p><p>Thanks for contacting me! I got your message:</p><blockquote>${message}</blockquote><p>I’ll reply soon!</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("🔥 General error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
