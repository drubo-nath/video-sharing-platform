import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstnce = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongDB connected !! DB host: ${connectionInstnce.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ",error);
        process.exit(1)
    }
}

export default connectDB;