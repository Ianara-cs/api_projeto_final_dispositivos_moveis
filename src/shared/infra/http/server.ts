import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import { authMiddleware } from './middlewares/authMiddleware'
import { errorMiddleware } from './middlewares/errorMiddleware'
import { router } from './routes'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.get('/', authMiddleware, (req, res) => {
    res.send('Hello World!')
})

app.use(errorMiddleware)

const port = 5000

app.listen(port, () => console.log('Running server!'))