const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  projectId: { type: String, required: true, index: true },
  timestamp: { type: Date, required: true, index: true },
  count: { type: Number, required: true },
});

module.exports = mongoose.model('Usage', usageSchema); 