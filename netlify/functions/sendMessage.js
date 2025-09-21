import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // 1️⃣ Save to MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await connection.end();

    // 2️⃣ Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "outlook"
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Notify YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Message from Portfolio",
      text: `📩 You got a new message!\n\nFrom: ${name} (${email})\n\n${message}`,
    });

    // 4️⃣ Auto-reply to USER (HTML email)
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message sent & auto-replied!" }),
    };
  } catch (err) {
    console.error("Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
