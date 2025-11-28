const express = require('express');
const con = require('./config')
const cors=require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, resp) => {
    resp.send("server running")
})

app.post("/adduserprofile", (req, resp) => {
    const data = req.body;
    con.query("INSERT INTO usercollection SET ? ", data, (error, result, fields) => {
        if (error) throw error;
        resp.send(result)
    })
})

app.get("/getuserprofile", (req, resp) => {
    con.query("select * from usercollection", (err, result) => {
        resp.send(result)
    });

})

app.listen(5000);