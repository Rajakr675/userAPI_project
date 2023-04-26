const express = require("express");
const app = express();
const port = 3000;
const router = require('./Routers')

app.use(express.json());

app.use('/',router)

app.listen(port,()=>{
  console.log(`My Server Running At http://localhost:${port}`);
})