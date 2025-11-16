// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    // Placeholder "AI"
    res.json({
        reply: `You said: ${message}`
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
