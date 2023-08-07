import express from 'express'
import dotenv from 'dotenv'
import 'colors'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()


app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT,
  console.log(`Server is running in ${process.env.NODE_ENV}
          on port ${PORT}\n go to http://localhost:${PORT}/`.blue.bold))
