
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("👑 DARK CHARM BOT is running!");
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

app.post("/api/command", (req, res) => {
  const command = String(req.body.command || "")
    .trim()
    .toLowerCase();

  let reply;

  switch (command) {
    case ".menu":
      reply = "👑 DARK CHARM BOT MENU\n\n.ping - Check bot status\n.help - Get help\n.menu - Show commands";
      break;

    case ".ping":
      reply = "🏓 PONG! DARK CHARM BOT is ONLINE.";
      break;

    case ".help":
      reply = "👑 DARK CHARM BOT HELP\n\nTumia .menu kuona commands zote.";
      break;

    default:
      reply = "❌ Command haijatambulika. Tumia .menu";
  }

  res.json({
    success: true,
    bot: "DARK CHARM BOT",
    reply
  });
});

app.listen(PORT, () => {
  console.log(`DARK CHARM BOT running on port ${PORT}`);
});
