import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Routes/book.route.js"
import cors from "cors"
import userroute from "./Routes/user.route.js"

const app = express();

app.use(cors())
app.use(express.json())

dotenv.config();

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


app.listen(PORT,()=>{
  console.log(`The server is Running on port ${PORT}`);
  
})















