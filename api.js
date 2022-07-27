const params = require("./parameter.json");
const express = require("express");
const jsondata = require("./connection");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const cors = require('cors');
const dash = require("./cal.json");
const fs = require('fs');
const app = express();
const startcurldata = require("./startCurlRequest.json");
const statuscurldata = require("./statusCurlRequest.json");
const cancelcurldata = require("./cancelCurlRequest.json");

let mdFile;
let features;

app.use(bodyParser.json())
 
function mdFileRead() {
    fs.readFile("./Api.md", function(err, data){
        mdFile = data; 
    })
    return mdFile;
}

function featuresmdFileRead() {
    fs.readFile("./ApiDetails.md", function(err, data){
        features = data; 
    })
    return features;
}

function startmdRead() {
    fs.readFile("./startAPI.md", function(err, data){
        startapi = data; 
    })
    return startapi;
}

function statusmdRead() {
    fs.readFile("./statusAPI.md", function(err, data){
        statusapi = data; 
    })
    return statusapi;
}

function cancelmdRead() {
    fs.readFile("./cancelAPI.md", function(err, data){
        cancelapi = data; 
    })
    return cancelapi;
}
 
app.use(cors({
    origin:[
        "https://ezetap-docs-project-api.herokuapp.com",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3004",
        "http://localhost:3005",
    ]
}))

app.use(function (req, res, next) {
    const corsWhiteList = [
        "https://ezetap-docs-project-api.herokuapp.com",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "http://localhost:3004",
        "http://localhost:3005",
    ]

    if(corsWhiteList.indexOf(req.header.origin) !== -1){
        
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        //res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
    }
    next();
});

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/", (req, res) => {
    if(jsondata === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(jsondata)
    }
})

app.get("/params", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(params)
    }
})

app.get("/dashboard", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(dash)
    }
})

app.get("/md", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(mdFileRead())
    }
})

app.get("/featuresmd", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(featuresmdFileRead())
    }
})

app.get("/startapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(startmdRead())
    }
})

app.get("/statusapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(statusmdRead())
    }
})

app.get("/cancelapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(cancelmdRead())
    }
})

app.get("/startcurl", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(startcurldata)
    }
})

app.get("/statuscurl", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(statuscurldata)
    }
})

app.get("/cancelcurl", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(cancelcurldata)
    }
})

app.get("/createapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(startmdRead())
    }
})

app.get("/updateapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(statusmdRead())
    }
})

app.get("/fetchapi", (req, res) => {
    if(params === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(cancelmdRead())
    }
})