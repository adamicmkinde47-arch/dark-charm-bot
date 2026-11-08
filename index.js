
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/", (req, res) => {
  res.send("DARK CHARM BOT is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "online" });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "DARK CHARM BOT backend is connected!",
    pairing: "not_configured"
  });
});

app.post("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Backend connection successful!",
    pairing: "not_configured"
  });
});

app.listen(PORT, () => {
  console.log(`DARK CHARM BOT running on port ${PORT}`);
});
