//npm install bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer stripe

import cookieParser from 'cookie-parser';
import express from 'express' ;
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
// import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

//allow multiple origins
// const allowedOrigins = ['http://localhost:5173']
const allowedOrigins = ['https://organic-beta.vercel.app']

// const allowedOrigins = ['https://arcart-qwmk.onrender.com']



// app.post('/stripe',express.raw({type: 'application/json'}),stripeWebhooks)

//middleware configuration

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins,credentials:true}));

// app.use(cors({
//   origin: 'http://localhost:5173', // frontend URL
//   credentials: true // ✅ ALLOWS cookies to be sent
// }));

app.get('/',(req,res) => res.send("API is Working"));
app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRouter)






app.listen(port,() => {
    console.log(`server is running on https://localhost:${port}`)
})
