const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  threat: { type: mongoose.Schema.Types.ObjectId, ref: 'Threat', required: true },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', AlertSchema);