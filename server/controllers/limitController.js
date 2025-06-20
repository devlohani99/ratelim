const Limit = require('../models/Limit');


exports.setLimit = async (req, res) => {
  try {
    const { projectId, limit, window } = req.body;
    if (!projectId || !limit || !window) {
      return res.status(400).json({ error: 'projectId, limit, and window are required' });
    }
    // Upsert limit for the project
    const updated = await Limit.findOneAndUpdate(
      { projectId },
      { limit, window },
      { upsert: true, new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}; 