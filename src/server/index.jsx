const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // change if needed
  password: "Kaluppa@213",      // your MySQL password
  database: "portfolio",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

// API route for saving messages
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ Error inserting:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, message: "Message sent successfully!" });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
