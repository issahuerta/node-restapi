import cors from 'cors'
import express from 'express'
import config from './config'
import insumos from './routes/insumos.routes'
import hospitales from './routes/hospitales.routes'
import solicitud from './routes/solicitud.routes'
import entregas from './routes/entregas.routes'
const app = express()

//cors
app.use(cors())

//settings
app.set('port', config.port)
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(insumos,hospitales,solicitud,entregas)
export default app