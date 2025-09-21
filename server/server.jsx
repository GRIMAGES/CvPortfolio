import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

// --- App Setup ---
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// --- DB Connection ---
const db = mysql.createConnection({
  host: "localhost",  // or your server
  user: "root",
  password: "yourpassword",
  database: "portfolio"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL");
});

// --- API Route ---
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ DB Insert Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, message: "Message received!" });
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
