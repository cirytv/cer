import express from 'express'
import colors from 'colors'
import db from './config/db'
import { router_affiliates } from './router'
import cors from 'cors'

// connect to database
export async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.blue('successful database connection!'))
  } catch (error) {
    console.log(error)

    console.log(colors.red.bold('error!'))
  }
}
connectDB()

// Instance express
const server = express()

// Configuración de CORS para aceptar peticiones de cualquier origen
const corsOptions = {
  origin: '*', // Permitir todos los orígenes
}

server.use(cors(corsOptions))

// Read form data
server.use(express.json())

// affiliates
server.use('/api/affiliates', router_affiliates)

export default server
