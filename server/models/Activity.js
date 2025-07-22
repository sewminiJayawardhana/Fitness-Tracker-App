const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  date: {
    type: String, // Format: "YYYY-MM-DD"
    required: true,
    unique: true
  },
  steps: {
    type: Number,
    default: 0
  },
  calories: {
    type: Number,
    default: 0
  },
  workoutMinutes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Activity', activitySchema);
