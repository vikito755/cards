"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
var aOne = 12;
app.get('/', function (req, res) {
    res.send("Hello World! " + aOne);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
