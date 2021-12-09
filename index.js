import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
const app = express();
dotenv.config();
if (!fs.existsSync("Files"))
 fs.mkdirSync("Files");
const PORT = process.env.PORT;
app.get("/", (req, res) => {
res.send({message:"server running successfully"})

})

app.get("/createFiles", (req, res) => {
const date=new Date()
 let fileName = date.toISOString();
 fileName = fileName.slice(0, 19).replace(/:/g,"-");
 let content = date.valueOf().toString();

 fs.writeFile((`./Files/${fileName}.txt`), content, ((err) => {
 if(err)
 console.log(err)
 }))
res.send({message:"File Created"})
})

app.get("/retreiveFiles", (req, res) => {

 let directory = fs.readdirSync("./Files")

 res.send(directory.sort())
})
app.listen(PORT,(()=>console.log(`server running successfully @${PORT}`)))

