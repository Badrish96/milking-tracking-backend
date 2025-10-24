const express = require("express");
const router = express.Router();
const { createSession, getAllSessions } = require("../Controllers/sessionController");

// POST /api/sessions → Save session
router.post("/api/sessions", createSession);

// GET /api/sessions → Retrieve all sessions
router.get("/api/sessions", getAllSessions);

module.exports = router;
