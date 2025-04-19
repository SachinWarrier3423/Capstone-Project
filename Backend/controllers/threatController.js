const Threat = require('../models/Threat');

// GET /api/threats
exports.getThreats = async (req, res, next) => {
  try {
    const threats = await Threat.find().sort({ detected_at: -1 });
    res.json(threats);
  } catch (err) {
    next(err);
  }
};

// POST /api/threats
exports.createThreat = async (req, res, next) => {
  try {
    const threat = await Threat.create(req.body);
    res.status(201).json(threat);
    // Optionally emit websocket event here
  } catch (err) {
    next(err);
  }
};

// PUT /api/threats/:id
exports.updateThreat = async (req, res, next) => {
  try {
    const threat = await Threat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!threat) return res.status(404).json({ message: 'Threat not found' });
    res.json(threat);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/threats/:id
exports.deleteThreat = async (req, res, next) => {
  try {
    const threat = await Threat.findByIdAndDelete(req.params.id);
    if (!threat) return res.status(404).json({ message: 'Threat not found' });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};