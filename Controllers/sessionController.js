const MilkingSession = require("../Models/MilkingSession");

// POST /sessions — create new milking session
exports.createSession = async (req, res) => {
  try {
    const { start_time, end_time, duration, milk_quantity } = req.body;

    if (!start_time || !end_time || !duration || !milk_quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSession = new MilkingSession({
      start_time,
      end_time,
      duration,
      milk_quantity,
    });

    const savedSession = await newSession.save();
    res.status(201).json(savedSession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// GET /sessions — get all milking sessions (with pagination)
exports.getAllSessions = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;

    // Convert query params to numbers
    page = parseInt(page);
    limit = parseInt(limit);

    // Calculate skip value
    const skip = (page - 1) * limit;

    // Get total document count and paginated sessions
    const [sessions, total] = await Promise.all([
      MilkingSession.find()
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limit),
      MilkingSession.countDocuments(),
    ]);

    res.status(200).json({
      sessions,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
