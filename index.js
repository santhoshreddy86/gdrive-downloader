const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/download/:id", (req, res) => {
  const fileId = req.params.id;
  const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
  res.redirect(directLink);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
