const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
  user: "your_pg_user", // replace with your PostgreSQL username
  host: "localhost",
  database: "cosmic_blog",
  password: "your_pg_password", // replace with your PostgreSQL password
  port: 5432,
});

// Get all posts
app.get("/posts", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM posts ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

app.listen(3001, () => console.log("Server running on port 3001"));
