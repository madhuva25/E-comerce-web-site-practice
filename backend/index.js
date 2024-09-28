import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import authRout from "./router/authRoute.js"
import  cartRout  from './router/cartRoute.js';
import orderControl from "./router/orderRoute.js"

const app = express();
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const dbconect =()=>{
    
    try {
    mongoose.connect("mongodb+srv://bookdata:pCUBGTeteRAzpHUM@cluster0.ojhorte.mongodb.net/?retryWrites=true&w=majority")
    console.log("connet db ");
    }catch(err){
        console.log(err)
    }
}


app.use("/api/auth",authRout);
app.use("/api/bucket",cartRout);
app.use("/api/ord",orderControl)


app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error(err);
      return res.status(400).send({ message: "Invalid JSON" }); // Bad request
    }
    next();
  });
  
dbconect();

app.listen(3000, ()=>{
    try{
        console.log("listening on 3000")
    }catch(error){
        console.log(error);}


    })