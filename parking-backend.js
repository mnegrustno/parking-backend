const express = require('express')
const placeRouter = require('./routes/routes')
const PORT = process.env.PORT || 8080

const app = express()


app.use(express.json())
app.use('/api',placeRouter)


//Запуск сервера
app.listen(PORT,()=> console.log(`server started on port ${PORT}`))