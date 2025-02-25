import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { loginRouter, userRouter, errors } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// Middleware que aplica a todas las rutas
app.use(serverLog)

app.use(loginRouter)
app.use(userRouter)
app.use(errors)

app.listen(PORT, () => console.log('Server UP!'))

export default app
