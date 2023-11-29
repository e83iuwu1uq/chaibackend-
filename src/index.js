// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/super.js";
import mongoose  from "mongoose";
import { DB_NAME } from ".//constants.js";

dotenv.config({
    path :'./env'
})






connectDB()






/*import express from "express"
 First aproach to connect database 
(async () => {
    try {
        await mongoose.connect(`${process.env.
        MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERRor:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/