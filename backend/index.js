const app = require("./app")
const PORT = process.env.PORT || 8000
const connectDB = require("./src/db/connectDB")
const userRoutes = require('./src/routes/user.routes')

connectDB()

app.use('/', userRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})