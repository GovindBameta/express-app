import express from "express";

import router from "./route.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express kaise Ho");
});

app.get("/things/:name/:id([0-9]{5})", (req, res) => {
  const { name, id } = req.params;
  res.json({
    id,
    name,
  });
});

//catch All invalid routes
app.get("*", (req, res) => {
  res.send({
    message: "Sorry, this is  an invalid URL",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
