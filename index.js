//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirPath = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
res.sendFile(__dirPath+"/public/index.html");
});

app.post("/check", (req, res)=>{
var password = req.body["password"];
if (password==="ILoveProgramming"){
    res.sendFile(__dirPath+"/public/secret.html");
}else{
    res.redirect("/");
}


});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
