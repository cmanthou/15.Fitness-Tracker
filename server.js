const express = require("express");
const mongoose = require("mongoose");
// const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});