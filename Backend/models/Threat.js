const mongoose = require('mongoose');

const ThreatSchema = new mongoose.Schema({
  ip_address: { type: String, required: true },
  domain: { type: String },
  severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
  source: { type: String, required: true },
  detected_at: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Threat', ThreatSchema);