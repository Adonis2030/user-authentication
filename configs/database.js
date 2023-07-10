// Import the Mongoose library
const mongoose = require("mongoose");
// Load environment variables from .env file
require("dotenv").config();

// Retrieve environment variables
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_CLUSTER, MONGODB_URL } =
  process.env;

// Construct the MongoDB connection URL
const database_url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`;
// const database_url = MONGODB_URL;

// Define the function to connect to the database
const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(database_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connection successful
    console.log("Database connected...");
  } catch (err) {
    // Connection failed
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connectDB function to be used in other files
module.exports = connectDB;

// Execute the connectDB function to establish the database connection
connectDB();
