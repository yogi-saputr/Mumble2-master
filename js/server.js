const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "lobby.html"));
});

app.get("/room", (req, res) => {
  res.sendFile(path.join(__dirname, "room.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
