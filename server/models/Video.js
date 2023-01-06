import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {  // to track the specific user from this 
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
