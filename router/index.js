import  {Router} from "express"
import routerCities from "./citiesRouter.js"

let routerIndex = Router()
routerIndex.use('/cities', routerCities)

export default routerIndex