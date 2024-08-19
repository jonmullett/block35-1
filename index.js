const express = require("express");
const app = express();
const PORT = 3000;

app.get("/books", (req,res)=> {
    res.send ("hello from the server, the `/` endpoint");
});

app.get("/books/:id"), (req,res)=> {
    console.log(req.params.id);
    res.send ("here is info for book " + req.params.id);
};

app.listen (PORT,  () => {
    console.log(`server alive on Port ${PORT}?!!!`);
});