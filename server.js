const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes
// const authRoutes = require('./routes/api/auth');
const items = require("./routes/api/items");
// const userRoutes = require('./routes/api/users');

const app = express();

//body parser middleware
app.use(bodyParser.json());

//DB congfig
const db = require("./config/keys").MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((erro) => console.log(err));

app.use("/api/items", items);

const port = process.env.port || 5000;

app.listen(port, () => console.log("servet started on the port 5000"));
