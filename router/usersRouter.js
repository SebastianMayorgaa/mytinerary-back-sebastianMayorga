import { Router } from "express";
import register from "../controllers/users/create.js";
import validator from "../middlewares/validator.js";
import schemaUser from "../schemas/users/create.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import validateToken from "../controllers/users/read.js";
import passport from "../middlewares/passport.js";
import deleteUser from "../controllers/users/delete.js";

const routerUsers = Router()

routerUsers.post('/registerUser',validator(schemaUser), accountExist, createHash, register)
routerUsers.get('validateToken',passport.authenticate('jwt',{session:false}), validateToken)
routerUsers.delete('/deleteUser', deleteUser)

export default routerUsers