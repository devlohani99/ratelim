const Project = require('../models/Project');

module.exports = async function (req, res, next) {
  const apiKey =
    (req.body && req.body.apiKey) ||
    req.headers['x-api-key'];
  if (!apiKey) return res.status(401).json({ error: 'API key required' });
  const project = await Project.findOne({ apiKey });
  if (!project) return res.status(403).json({ error: 'Invalid API key' });
  req.projectId = project.projectId;
  next();
}; 