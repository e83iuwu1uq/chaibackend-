// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "../src/db/index.js";

import {app} from './utils/app.js';

dotenv.config({
    path: './.env'
})






connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : 
        ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})






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