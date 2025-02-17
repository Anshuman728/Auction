import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/MERN_AUCTION_PLATFORM")
    .then(() => {
      console.log("✅ Connected to database.");
    })
    .catch((err) => {
      console.error("❌ Error connecting to database:", err);
    });
};
