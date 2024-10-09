const User = require("../models/user.model");
// Capture server start time when the application starts
const serverStartTime = new Date();

const healthCheck = async (req, res) => {
  try {
    // Example checks
    const uptime = process.uptime(); // Get the server uptime in seconds
    const memoryUsage = process.memoryUsage(); // Get memory usage details

    res.status(200).json({
      success: true,
      message: "API is running",
      status: {
        uptime: uptime.toFixed(2), // Uptime in seconds
        memoryUsage: {
          rss: memoryUsage.rss, // Resident Set Size
          heapTotal: memoryUsage.heapTotal, // Total heap size
          heapUsed: memoryUsage.heapUsed, // Used heap size
          external: memoryUsage.external, // Memory used by C++ objects bound to JavaScript objects
        },
        startTime: serverStartTime.toISOString(), // Manually captured server start time
      },
      timestamp: new Date().toISOString(), // Current timestamp
    });
  } catch (error) {
    console.error("Health check error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: {
        message: "An unexpected error occurred while checking the health status.",
      },
    });
  }
};


  
// Create a new user
const createUser = async (req, res) => {
    try {
      const { authId, firstName, lastName, email } = req.body;
  
      // Validate request body
      if (!authId || !email) {
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors: {
            authId: !authId ? "authId is required" : undefined,
            email: !email ? "email is required" : undefined,
          },
        });
      }
  
      // Check if user already exists
      const userExists = await User.findOne({ authId, email });
      if (userExists) {
        return res.status(409).json({
          success: false,
          message: "User already exists",
          user: {
            authId: userExists.authId,
            firstName: userExists.firstName,
            lastName: userExists.lastName,
            email: userExists.email,
          },
        });
      }
  
      // Create a new user
      const newUser = new User({ authId, firstName, lastName, email });
      await newUser.save();
  
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
          authId: newUser.authId,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        },
      });
  
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: {
          message: "An unexpected error occurred. Please try again later.",
        },
      });
    }
  };
  

  module.exports = {
    createUser,
    healthCheck
  };