// controllers/imageController.js

exports.uploadImage = async (req, res) => {
  // Your image upload logic
  res.status(200).send("Image uploaded");
};

exports.getAllImages = async (req, res) => {
  // Your logic to fetch images
  res.status(200).json([]);
};
