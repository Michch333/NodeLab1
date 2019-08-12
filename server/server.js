const http = require('http');
const express = require('express');
// const bodyParser = require('body-parser');

const server = express();
// server.use(bodyParser);

// const listOfQuotes = ["test", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10", "test11"]

const listOfQuotes = ["Wheter you believe you can, or you believe you can not, you are right", "One Fish, Two Fish, Red Fish, Blue Fish", "Ho-Ho-Ho", "I'm the one who knocks!", "Say Hello to my little friend", "You can take a horse to church, but you cant shitpants it", "It's not about who is right, it's about WHAT is right", "Don't worry, be happy", "Life is like a box of chocolates, you never know what you're going to get", "JUST DO IT!"
];


server.get("/quotes/:id", (req, res) => {
    // res.setHead(200);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.json({
        quote: listOfQuotes[req.params.id]
    });
    res.send();
    res.end();
}).listen(8010, (err) =>{
    console.log("Server is Running");
});