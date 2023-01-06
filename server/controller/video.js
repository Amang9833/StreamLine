import Video from '../models/Video.js';
import { createError } from "../error.js";

//create video
export const createVideo = async (req,res,next) => {
    try { 
        const newVideo = new Video(req.body);
        newVideo.save();
        res.status(200).json(newVideo);
    }
    catch (err) { next(err) };
}

//get videos
export const getVideos = async (req, res, next) => {
    try {

        const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
        res.status(200).json(videos)
    }
    catch (err) {
        next(err);
    }
}





