const express = require("express");
const mongoose = require("mongoose");
const db = require("./models/fitness")

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

require('./routes/api.js')(app);
require('./routes/html-route.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
