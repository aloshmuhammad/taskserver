import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import logger from "morgan";
import dotenv from 'dotenv'
import Connection from './Model/Connection.js';
import userRouter from './Routes/userRoutes.js'

dotenv.config()

const app=express()
const router=express.Router()
const port=process.env.PORT

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json())


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  Connection()
  router.use('/user',userRouter)