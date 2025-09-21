const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    // Connect to hosted MySQL (NOT XAMPP — needs online DB like ClearDB, PlanetScale, or Railway)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [body.name, body.email, body.message]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message saved!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
