import { Router } from "express";
import register from "../controllers/users/create.js";
import validator from "../middlewares/validator.js";
import schemaUser from "../schemas/users/create.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";

const routerUsers = Router()

routerUsers.post('/registerUser',validator(schemaUser), accountExist, createHash, register)

export default routerUsers