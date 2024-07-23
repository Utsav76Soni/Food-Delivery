import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://soniutsav02:10032003@cluster0.haizwb6.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}