const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/imageIndexing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

const imageRoutes = require("./routes/imageRoutes");
app.use("/api/images", imageRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
