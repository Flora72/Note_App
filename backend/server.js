import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You've got 5 notes");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});