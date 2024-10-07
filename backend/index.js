const app = require("./app")
const PORT = process.env.PORT || 8000
const connectDB = require("./src/db/connectDB")

connectDB()



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})