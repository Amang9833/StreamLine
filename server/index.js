// imports 
import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose'
import cookieParser from "cookie-parser";
import userRoutes from "./router/auth.js";
import videoRoutes from "./router/video.js";
import cors from 'cors'

// variables
dotenv.config();
const app = express();


//db conn
const connection = () => {
    mongoose.set("strictQuery", true);
    mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connection Successful..."))
    .catch((error) => console.log(error, "not connected"));
    
}

//middleware 
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth', userRoutes)
app.use('/api/video', videoRoutes)


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.message || "something went wrong";
    return res.status(200).json({
        msg,
        status
    });
});

app.listen(process.env.PORT, () => {
    connection();
    console.log('backend started')
})

