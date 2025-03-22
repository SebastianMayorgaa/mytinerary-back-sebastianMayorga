import express from "express"
import 'dotenv/config.js'
import './config/database.js'

const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("Server ready in port:"+PORT);

server.listen(PORT, ready)

