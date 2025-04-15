import { Router } from "express";
import { allItineraries, itineraryById, itineraryByCityId } from "../controllers/itineraries/read.js";
import  create  from "../controllers/itineraries/create.js";
import deleteById from "../controllers/itineraries/delete.js";
import update from "../controllers/itineraries/update.js";

const routeritineraries = Router()

routeritineraries.get('/allItineraries', allItineraries)
routeritineraries.get('/id/:id', itineraryById)
routeritineraries.get('/city/:cityId', itineraryByCityId)//falta encontrar por ciudad
routeritineraries.post('/createItinerary', create) //crear coleccion en postman
routeritineraries.put('/updateInfo', update)
routeritineraries.delete('/deleteById/:id', deleteById)


export default routeritineraries