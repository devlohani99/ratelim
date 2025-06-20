const mongoose = require('mongoose');

const limitSchema = new mongoose.Schema({
  projectId: { type: String, required: true, index: true },
  limit: { type: Number, required: true },
  window: { type: String, enum: ['minute', 'hour', 'day'], required: true },
});

module.exports = mongoose.model('Limit', limitSchema); 