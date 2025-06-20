const Limit = require('../models/Limit');
const Usage = require('../models/Usage');

// Helper to get window in ms
toMs = (window) => {
  if (window === 'minute') return 60 * 1000;
  if (window === 'hour') return 60 * 60 * 1000;
  if (window === 'day') return 24 * 60 * 60 * 1000;
  return 60 * 1000;
};

exports.track = async (req, res) => {
  try {
    const projectId = req.projectId;
    const limitDoc = await Limit.findOne({ projectId });
    if (!limitDoc) return res.status(400).json({ error: 'No rate limit set for this project' });
    const { limit, window } = limitDoc;
    const now = new Date();
    const windowMs = toMs(window);
    const windowStart = new Date(now - windowMs);
    // Get usage in current window
    const usage = await Usage.find({
      projectId,
      timestamp: { $gte: windowStart }
    });
    const totalCount = usage.reduce((sum, u) => sum + u.count, 0);
    let allowed = totalCount < limit;
    let remaining = Math.max(0, limit - totalCount);
    let resetIn = 0;
    if (usage.length > 0) {
      const first = usage[0].timestamp;
      resetIn = windowMs - (now - first);
    } else {
      resetIn = windowMs;
    }
    if (allowed) {
      // Record usage
      await Usage.create({ projectId, timestamp: now, count: 1 });
    }
    res.json({ allowed, remaining, resetIn });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}; 