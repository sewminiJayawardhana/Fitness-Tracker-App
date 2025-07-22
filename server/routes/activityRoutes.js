const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// 1. Log or Update today's activity
router.post('/log', async (req, res) => {
  try {
    const { steps, calories, workoutMinutes } = req.body;
    const today = new Date().toISOString().split('T')[0];

    let activity = await Activity.findOne({ date: today });

    if (activity) {
      activity.steps = steps;
      activity.calories = calories;
      activity.workoutMinutes = workoutMinutes;
      await activity.save();
    } else {
      activity = new Activity({
        date: today,
        steps,
        calories,
        workoutMinutes,
      });
      await activity.save();
    }

    res.status(200).json(activity);
  } catch (err) {
    res.status(500).json({ message: 'Error saving activity' });
  }
});

// 2. Get today's summary
router.get('/summary', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const activity = await Activity.findOne({ date: today });

    res.json(activity || { steps: 0, calories: 0, workoutMinutes: 0 });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching summary' });
  }
});

// 3. Get last 7 days of activity
router.get('/weekly', async (req, res) => {
  try {
    const today = new Date();
    const last7Days = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      last7Days.push(date.toISOString().split('T')[0]);
    }

    const activities = await Activity.find({
      date: { $in: last7Days }
    }).sort({ date: 1 });

    const result = last7Days.map(date => {
      const day = activities.find(a => a.date === date);
      return {
        date,
        steps: day ? day.steps : 0,
        calories: day ? day.calories : 0,
        workoutMinutes: day ? day.workoutMinutes : 0,
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching weekly data' });
  }
});

module.exports = router;
