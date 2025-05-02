import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import validator from "../middlewares/validator.js";
import schemaSignIn from "../schemas/auth/signIn.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import validatePassword from "../middlewares/validatePassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";

const routerAuth = Router()

routerAuth.post('/signIn',validator(schemaSignIn),accountNotExist,validatePassword,generateToken, signIn)
routerAuth.post('/signOut',passport.authenticate('jwt', { session: false }), signOut)

export default routerAuth