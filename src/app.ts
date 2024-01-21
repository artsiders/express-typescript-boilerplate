import express from "express"
import cors from 'cors';
import productRoute from './routes/product.route';
import mongoose from "mongoose";

require('dotenv').config();
const app = express();

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cors());

// main route
app.use('/products', productRoute);


const port = process.env.PORT
app.listen(port, () => {
    console.log("Server listening on port : " + port + "✅")
})


// mongo db connexion string
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/product')
    .then(() => console.log('MongoDb conextion ✅'))
    .catch((err) => console.log('MongoDb conextion ❌', err));

module.exports = app;