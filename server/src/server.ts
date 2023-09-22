import express from "express";
import {Express, Request, Response } from 'express';
import { sql } from "@vercel/postgres";

require('dotenv').config();

const app: Express = express();
const port = process.env.port || 8080;

let date = new Date(); 

console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}.${date.getSeconds()} ${-date.getTimezoneOffset() / 60}`);

//INSERT INTO post (user_id, username, content, likes, time_posted) VALUES (1, 'Jim', 'poopy', 0, 2023-9-21 21:34.51 -4);


app.use(express.static(__dirname + "/assets"));

app.get("/api/posts/home", (req: Request, res: Response) => {
  const get_posts = async () => {
    const { rows } = await sql`SELECT * FROM post;`
    res.send(rows);
  };
  get_posts();
});


app.get("/api/posts/:id", (req: Request, res: Response) => {
  const get_user_posts = async () => {
    const { rows } = await sql`SELECT * FROM post WHERE user_id = ${req.params.id};`
    res.send(rows);
  };
  get_user_posts();
});

app.get("/api/user/:id", (req: Request, res: Response) => {
  const get_user_posts = async () => {
    const { rows } = await sql`SELECT * FROM "user" WHERE id = ${req.params.id};`
    res.send(rows);
  };
  get_user_posts();
});

app.get("*", (req: Request, res: Response) => {
  res.send('Sorry, this is an invalid URL.');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


export default app;
