import express from 'express'
import colors from 'colors'
import db from './config/db'
import { router_empresa, router_propietarios } from './router'

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

// Read form data
server.use(express.json())

// propietarios
server.use('/api/propietarios', router_propietarios)
// empresas
server.use('/api/empresa', router_empresa)

export default server
