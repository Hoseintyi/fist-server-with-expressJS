import express from "express";

const app = express();

function logger(req, res, next) {
    console.log("your request is " + req.method);
    console.log("your URL is " + req.url);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.post("/Register", (req, res) => {
    res.sendStatus(200);
});


app.listen(3000, () => {
    console.log("server now running on port 3000!");
});