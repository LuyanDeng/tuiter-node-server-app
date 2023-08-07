import express from "express";
import res from "express/lib/response.js";

const HelloController = (app) => {
    app.get('/hello', (req, res) => {

        res.send('Life is good!')
    })
    app.get("/", (req, res) => {
        res.send('Welcome to Full Stack Development!')
    })
//use get to define the HTTP method for the route.
    app.get("/add/:num1/:num2", (req, res) => {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);
        const sum = num2 + num1;
        res.json({sum: sum});
    })
}
export default HelloController;
