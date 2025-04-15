import  {Router} from "express"
import routerCities from "./citiesRouter.js"
import routeritineraries from "./itinerariesRouter.js"

let routerIndex = Router()
routerIndex.use('/cities', routerCities)
routerIndex.use('/itineraries', routeritineraries)

export default routerIndex