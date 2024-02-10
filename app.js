const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
store = require('./routes')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1/store", store)

app.use((req, res) => {
    res.status(404).send("<h1>OOPS  404 page not found </h1>")
})





mongoose.connect(process.env.URL).then(() => {
    app.listen(4005, () => {
        console.log("connected to the database and start listening at post 4005..")
    })

}).catch((err) => {
    console.log("can't connect ", err)
})