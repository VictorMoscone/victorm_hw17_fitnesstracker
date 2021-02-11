const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/db_name", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// app.use(require("./routes/api-route.js"));
// app.use(require("./routes/html-route.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});