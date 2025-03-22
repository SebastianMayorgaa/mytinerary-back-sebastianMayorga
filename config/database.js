import mongoose from "mongoose";

let url = process.env.URI_MONGO
console.log(url);


async function connectDB() {
    try {
       await mongoose.connect(process.env.URI_MONGO)
       console.log("database connected");
       
    } catch (error) {
        console.log(error);  
    }
}
connectDB()