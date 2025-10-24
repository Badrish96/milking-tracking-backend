const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const milkingSessionSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, // generate UUID
    unique: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  milk_quantity: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("MilkingSession", milkingSessionSchema);
