import  {Router} from "express"
import routerCities from "./citiesRouter.js"
import routeritineraries from "./itinerariesRouter.js"
import routerUsers from "./usersRouter.js"
import routerAuth from "./authRouter.js"

let routerIndex = Router()
routerIndex.use('/cities', routerCities)
routerIndex.use('/itineraries', routeritineraries)
routerIndex.use('/users', routerUsers)
routerIndex.use('/auth', routerAuth)

export default routerIndex