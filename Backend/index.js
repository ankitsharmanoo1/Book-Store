import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Routes/book.route.js"
import cors from "cors"
import userroute from "./Routes/user.route.js"
import path from "path"
import { fileURLToPath } from "url";

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;


try {
   mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
   })
   console.log(`Data Base Connected Sucessfully`);
   
} catch (error) {
     console.error("Error: ", error);
     
}


//defining routes

app.use("/book",bookRoute)

app.use("/user",userroute)









if(process.env.NODE_ENV === "production")
{
     const dirPath = path.resolve();
     app.use(express.static("Frontend/dist"))
     app.get("*",(req,res) =>{
           res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"))
     })
}


app.listen(PORT,()=>{
  console.log(`The server is Running on port ${PORT}`);
  
})















