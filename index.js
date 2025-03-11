import express from "express";

import router from "./route.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express kaise Ho");
});

app.use("/user", router);
app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} Created Successfully`,
  });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userId} updated to ${name} , ${email}`,
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `User with ID ${userId} deleted Successfullys`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
