const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  imagePath: String,
});
module.exports = mongoose.model("Image", imageSchema);
