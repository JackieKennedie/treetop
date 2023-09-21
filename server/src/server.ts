import * as express from "express";
import {Express, Request, Response } from 'express';


const app: Express = express();
const Datastore = require("nedb");

const port = process.env.port || 8080;
const db = {
  users: new Datastore("./db/users.db"),
  posts: new Datastore("./db/posts.db")
};

db.users.loadDatabase();
db.posts.loadDatabase();

let date = new Date(); 

//console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`);

//db.posts.insert({user_id: "00000", username: "Jim", caption:"poopy", likes:"0", time_posted:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`});
//db.posts.insert({user_id: "00000", username: "Jim", caption:"poopy 2", likes:"0", time_posted:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`});
//db.posts.insert({user_id: "00000", username: "Jim", caption:"poopy 3", likes:"0", time_posted:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`});
//db.posts.insert({user_id: "00001", username: "Bob", caption:"poopee", likes:"0", time_posted:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`});

//db.users.insert({_id: "00000", username: "Jim", followers: "0"});
//db.users.insert({_id: "00001", username: "Bob", followers: "0"});

//db.posts.insert({user_id: "00000", username: "Jim", caption:`Introducing the one and only Mr. Sniffles, our resident banana connoisseur with a nose that could rival a truffle-hunting pig! 🍌🐵😂Legend has it that Mr. Sniffles' nose is so sensitive that it can detect the exact moment a banana reaches its peak ripeness from a mile away. The other monkeys in the jungle have even started a betting pool on when he'll make his move, and let's just say, Mr. Sniffles is always the top banana when it comes to predictions!`, likes:"0", time_posted:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`});


app.use(express.static(__dirname + "/assets"));

app.get("/api/posts/home", (req: Request, res: Response) => {
  db.posts.find({}, (err, data) => {
    res.send(data);
  });
});

app.get("/api/posts/:id([0-9]{5})", (req: Request, res: Response) => {
  db.posts.find({user_id: req.params.id}, (err, data) => {
    res.send(data);
  });
});

app.get("/api/user/:id([0-9]{5})", (req: Request, res: Response) => {
  db.users.find({_id: req.params.id}, (err, data) => {
    res.send(data);
  })
});

app.get("*", (req: Request, res: Response) => {
  res.send('Sorry, this is an invalid URL.');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

db.users.persistence.setAutocompactionInterval(5000);
