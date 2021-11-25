require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const mainRouter = require('./routes/main')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    //await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server listening on port ${port}`))
  } catch (error) {
    console.log(error);
  }
}

start()