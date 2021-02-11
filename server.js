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
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html-route.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
