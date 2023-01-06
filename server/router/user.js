import express from "express";
import {update,deleteUser,getUser} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();



export default router;