console.log("ActionSync backend running");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("ActionSync backend running on port 3000");
});
