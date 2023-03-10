import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const path = require('path');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;  
 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});