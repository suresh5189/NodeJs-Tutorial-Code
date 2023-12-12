// The npm init command in the JSON language creates a package.json file for your project’s frontend. A package.json file is a file that contains information about the project’s packages and dependencies. It also contains metadata for the project such as version number, author, and description.

// ----------------------------------------------------------------

/*
 nodemon
 When you develop a node app and you make some changes, to see them in effect you have to restart the server.

 When you launch your node.js application with Nodemon it will monitor for any changes and automatically restart the server, improving your productivity.

 we install the nodemon using the command : npm install nodemon
*/

// -------------------------------------------------------------------

// Creating Simple Server

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("<h1>Home Page</h1>");
//   } else if (req.url === "/about") {
//     res.end("<h1>About</h1>");
//   } else {
//     res.end("<h1>Page Not Found</h1>");
//   }
// });

// server.listen(5000, () => {
//   console.log("Server is working");
// });

// -----------------------------------------------------------------------

// Creating Simple Server Using ExpressJs

// import express from "express";

// const app = express();

// const products = ["television", "iphone 14", "headphones"];

// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     products,
//   });
// });

// app.listen(5000, () => {
//   console.log("Server is working");
// });

// ------------------------------------------------------------------------

// EJS

// import express from "express";
// import path from "path";

// const app = express();

// console.log(path.join(path.resolve(), "public"));

// app.use(express.static(path.join(path.resolve(), "public")));

// //Setting up View Engine
// app.set("view engine", "ejs");

// // dynamic file
// app.get("/", (req, res) => {
//   res.render("index", { name: "Everyone" });
// });

// // static file
// app.get("/", (req, res) => {
//   res.sendFile("index");
// });

// app.listen(5000, () => {
//   console.log("server is working");
// });

// ---------------------------------------------------------------------

// MongoDB server

// import express from "express";
// import mongoose from "mongoose";

// mongoose
//   .connect("mongodb://127.0.0.1:27017", {
//     dbName: "Backend",
//   })
//   .then((c) => console.log("Database is connected"))
//   .catch((e) => console.log(e));

// // Creating Schema
// const messageSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// // Creating Model

// const Message = mongoose.model("Message", messageSchema);

// const app = express();

// app.get("/add", async (req, res) => {
//   const { name, email } = req.body;
//   awaitMessage.create({ name, email });
//   // OR
//   Message.create({ name: "David", email: "david@gmail.com" }).then(() => {
//     res.send("nice");
//   });
// });

// app.listen(5000, () => {
//   console.log("server is working");
// });

// -------------------------------------------------------------------

// Authentication in NodeJs

// import express from "express";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";

// const app = express();
// app.use(cookieParser());

// // Middleware hai yeh
// const isAuthenticated = async (req, res, next) => {
//   const { token } = req.cookies;
//   if (token) {
//     const decodedData = jwt.verify(token, "woi3ernini45niiw3csdfit4");
//     console.log(decodedData);
//     //in decodedData we will be getting the same user _id

//     //we will be searching the user by user id
//     req.user = await User.findById(decodedData._id);
//     console.log(req.user); // this command will give us the whole detail of user by using the user id
//   } else {
//     res.render("Login");
//   }
// };

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model("User", UserSchema);

// app.get("/", isAuthenticated, (req, res) => {
//   res.render("Logout");
// });

// // Login
// app.post("/login", async (req, res) => {
//   const { name, email } = req.body;

//   let user = await User.findOne({ email });
//   if (!user) {
//     return res.redirect("/register");
//   }

//   user = await User.create({
//     name,
//     email,
//   });

//   //Creating token
//   const token = jwt.sign({ _id: user._id }, "woi3ernini45niiw3csdfit4");

//   res.cookie("token", token, {
//     httpOnly: true,
//     // token will expires after 1 min from now
//     expires: new Date(Date.now() + 60 * 1000),
//   });
//   res.redirect("/");
// });

// // Logout from the screen
// app.post("/logout", (req, res) => {
//   res.cookie("token", null, {
//     httpOnly: true,
//     // token will expires after 1 min from now
//     expires: new Date(Date.now()),
//   });
//   res.redirect("/");
// });

// ------------------------------------------------------------------------------
