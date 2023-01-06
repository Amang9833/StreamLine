import express from "express";
const Router = express.Router();
import verifyToken from '../verifyToken.js'
import { createVideo , getVideos } from "../controller/video.js";


//create a video
// Router.post("/", verifyToken, createVideo);
Router.post("/",  createVideo);
Router.get("/getVideo", getVideos);


export default Router;
