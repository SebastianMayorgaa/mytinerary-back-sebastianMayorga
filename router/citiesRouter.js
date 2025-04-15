import { Router } from "express";
import {allCities, cityById} from '../controllers/cities/read.js'
import { create, createMany } from "../controllers/cities/create.js";
import deleteById from "../controllers/cities/delete.js";
import update from "../controllers/cities/update.js";


const routerCities = Router()

routerCities.get('/allCities', allCities)
routerCities.get('/id/:id', cityById)
routerCities.post('/createCity', create)
routerCities.post('/createMany', createMany)
routerCities.put('/updateCity', update)
routerCities.delete('/deleteById/:id', deleteById)

export default routerCities