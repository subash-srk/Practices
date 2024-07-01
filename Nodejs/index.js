import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
// var express = require('express')

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, This is Node JS Speaking");
});

app.post("/add", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    console.log(name);

    res.send(`Hello ${name}, You're ${age} years old.`);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});