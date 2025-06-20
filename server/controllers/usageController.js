const Limit = require('../models/Limit');
const Usage = require('../models/Usage');

// Helper to get window in ms
toMs = (window) => {
  if (window === 'minute') return 60 * 1000;
  if (window === 'hour') return 60 * 60 * 1000;
  if (window === 'day') return 24 * 60 * 60 * 1000;
  return 60 * 1000;
};

exports.getUsage = async (req, res) => {
  try {
    const { projectId } = req.params;
    const limitDoc = await Limit.findOne({ projectId });
    if (!limitDoc) return res.status(400).json({ error: 'No rate limit set for this project' });
    const { limit, window } = limitDoc;
    const now = new Date();
    const windowMs = toMs(window);
    const windowStart = new Date(now - windowMs);
    const usage = await Usage.find({
      projectId,
      timestamp: { $gte: windowStart }
    });
    const totalCount = usage.reduce((sum, u) => sum + u.count, 0);
    let remaining = Math.max(0, limit - totalCount);
    let resetIn = 0;
    if (usage.length > 0) {
      const first = usage[0].timestamp;
      resetIn = windowMs - (now - first);
    } else {
      resetIn = windowMs;
    }
    res.json({ used: totalCount, remaining, resetIn });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}; 