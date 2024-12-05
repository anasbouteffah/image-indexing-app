const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

// Import routes
const imageRoutes = require("./routes/imageRoutes"); // Make sure this path is correct
const categoryRoutes = require("./routes/categoryRoutes"); // Import other routes similarly

// Middleware
app.use(cors()); // CORS middleware
app.use(bodyParser.json()); // Body parser middleware to parse JSON

// Use the routes
app.use("/api/images", imageRoutes); // This applies the image routes to `/api/images`
app.use("/api/categories", categoryRoutes); // Similarly, for categories

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/imageIndexing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
