// const express = require("express");
const jsondata = require("./connection");

const app = express()
app.use(bodyParser.json())

app.use(function (req, res, next) {
    const corsWhiteList = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://ezetap-docs-project-api.herokuapp.com/"
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

app.get("/", (res, req) => {
    if(jsondata === ""){
        console.log("Data Not Found")
        res.sendStaus(500)
    } else {
        res.send(jsondata)
    }
})