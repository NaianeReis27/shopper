import 'express-async-errors'
import handleErrorMiddleware from './middlewares/handleError.middleware'
import express from 'express'
import routes from './routes'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(handleErrorMiddleware)

export default app
