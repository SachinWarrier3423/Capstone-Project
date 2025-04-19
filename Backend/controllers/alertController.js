const Alert = require('../models/Alert');

// GET /api/alerts
exports.getAlerts = async (req, res, next) => {
  try {
    const alerts = await Alert.find().populate('threat').sort({ created_at: -1 });
    res.json(alerts);
  } catch (err) {
    next(err);
  }
};