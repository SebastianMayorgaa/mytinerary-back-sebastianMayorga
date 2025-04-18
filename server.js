import express from "express"
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from "morgan"
import routerIndex from "./router/index.js"
import error_500 from "./middlewares/error_500.js"
import error_400 from "./middlewares/error_400.js"
import error_404 from "./middlewares/error_404.js"

const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("Server ready in port:"+PORT);

server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.use('/api', routerIndex)
server.use(error_404)
server.use(error_400)
server.use(error_500)

server.listen(PORT, ready)

