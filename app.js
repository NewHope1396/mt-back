const express = require("express");
const detaislRouter = require("./routes/api/details")
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/details" ,detaislRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Not Found"
    })
})

app.use((err, req, res, next) => {
    const {status = 500, message = "Server Error"} = err;

    res.status(status).json({
        message
    })
})

module.exports = app;