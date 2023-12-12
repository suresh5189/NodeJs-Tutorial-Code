// API and Params

import express from "express";
import mongoose from "mongoose";

const app = express();

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("<h1>Hello Everyone!</h1>");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users: [],
  });
});

app.post("/users/new", async (req, res) => {
  await User.create({
    name: "David",
    email: "david123@gmail.com",
    password: "david1234@",
  });

  res.json({
    success: true,
    message: "Registerd Successfully",
  });
});

// getting the user complete detail by just passing the user id
app.get("/userid", async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);

  res.json({
    sucess: true,
    user,
  });
});

app.listen(5000, () => {
  console.log("Server is Working");
});
