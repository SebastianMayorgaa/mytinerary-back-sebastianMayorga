import { Router } from "express";
import {allCities, cityById} from '../controllers/cities/read.js'
import { create, createMany } from "../controllers/cities/create.js";

const routerCities = Router()

routerCities.get('/allCities', allCities)
routerCities.get('/id/:id', cityById)
routerCities.post('/createCity', create)
routerCities.post('/createMany', createMany)

export default routerCities