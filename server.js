/***************************** */
// DEPENDENCIES
/***************************** */
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { PORT = 3000, DATABASE_URL } = process.env

const app = express()

/***************************** */
// DATABASE CONNECTION
/***************************** */
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
    .on("open", () => console.log("Mongoose Connected"))
    .on("close", () => console.log("Mongoose Disconnected"))
    .on("error", () => console.log(error))

/***************************** */
// MODELS
/***************************** */
const cheeseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
})

const Cheese = mongoose.model("Cheese", cheeseSchema)

/***************************** */
// MIDDLEWARE
/***************************** */

/***************************** */
// ROUTES
/***************************** */

/***************************** */
// SERVER LISTENER
/***************************** */
app.listen(PORT, () => {
    console.log(`Can you feel the love on PORT: ${PORT}`)
})