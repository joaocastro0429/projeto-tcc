import express from 'express'
import 'dotenv/config'
import productRouter from './router/ProductsRouter'

const app = express()

app.use(express.json())
app.use(productRouter)


app.listen(process.env.PORT || 3000)