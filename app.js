
//const express = require('express');
import "dotenv/config";
import cors from 'cors'
import express from "express";
import HelloController from "./controller/hello-controller.js";
import UserController from "./users/user-controller.js";
import TuitsController from "./controller/tuits/tuits-controller.js";
import session from "express-session";
import authController from "./users/auth-controller.js";
const app =express();
// mapping the URL pattern '/hello' to a function that handles the HTTP request

app.use(cors({
    credentials:true,
    origin: ["https://a5--magical-frangipane-9b7455.netlify.app","http://localhost:3000"]
    //origin:"http://localhost:3000", // only accept info from this domain
})); // configure cors right after instantiating express
app.use(express.json());  // parse JSON from HTTP request body
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  
app.use(session(sessionOptions));
TuitsController(app);
HelloController(app);
UserController(app);
authController(app);
const port = process.env.PORT || 4000
//app.listen(4000);
app.listen(port);