const express = require("express");
const router = express.Router();

router.post("/process-meeting", async (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript is required" });
  }

  res.json({
    message: "Transcript received",
    transcriptLength: transcript.length
  });
});

module.exports = router;
