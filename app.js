import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


import ProductRoute from './routes/product.route.js';

const app = express()
const port = 5000

dotenv.config()


//MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use("/api/products", ProductRoute);


mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log("DB connected")
    app.listen(port , ()=> {
        console.log(`Server Running in: http://localhost:${port}/`)
    })
})
.catch((err) => {
  console.log("Error: ", err)
})