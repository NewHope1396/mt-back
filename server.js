const mongoose = require("mongoose");

const app = require("./app");

const {DB_HOST, PORT = 3000} = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
.then(() => {
    console.log("Connected to DB successfully")
    app.listen(PORT, () => console.log(`Started at ${PORT} port`));
})
.catch(error => {
    console.log(error.message);
    process.exit(1);
})

    