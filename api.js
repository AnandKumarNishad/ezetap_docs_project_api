import params from "./parameter.json";

const express = require("express");
const jsondata = require("./connection");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const cors = require('cors');


const app = express()
app.use(bodyParser.json())

app.use(cors({
    origin:[
        "https://ezetap-docs-project-api.herokuapp.com",
        "http://localhost:3000",
        "http://localhost:3001",
    ]
}))

app.use(function (req, res, next) {
    const corsWhiteList = [
        "https://ezetap-docs-project-api.herokuapp.com",
        "http://localhost:3000",
        "http://localhost:3001",
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

// app.get("/" , (req, res) => {
//     res.send("Go to /data")
// })

app.get("/", (req, res) => {
    if(jsondata === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(jsondata)
    }
})

app.get("/params", (req, res) => {
    if(jsondata === ""){
        console.log("Data Not Found")
        res.sendStatus(500)
    } else {
        res.send(params)
    }
})