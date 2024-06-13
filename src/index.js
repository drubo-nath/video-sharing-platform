// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("ERROR happened", error)
            throw error
        }) 

        app.listen(process.env.port || 8000, () => {
            console.log("server is running at port:", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection failed !!!", err);
    })























/*
import express from "express";

const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", () => {console.log("ERROR happened", error )
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR: ", error)
            throw err
        }
    })()

    */