import express from "express";

const app = express();

app.get("/" , (req , res)=>{
    res.send("<h1>hello world</h1>");
});

app.post("/Register" , (req , res)=>{
    res.sendStatus(200);
});


app.listen(3000 , ()=>{
    console.log("server now running on port 3000!");
});