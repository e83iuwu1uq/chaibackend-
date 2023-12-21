import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { logoutUser } from "../controllers/user.controller.js";


const router = Router()

router.route("/register").post( 
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name:"coverImage",
            maxCount: 1
        }
    ]),
    
registerUser)



router.route("/login").post(loginUser)


// Secured routes
router.route("/logout").post(verifyJWT, logoutUser)


export default router