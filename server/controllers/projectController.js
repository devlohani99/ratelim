const Project = require('../models/Project');
const { generateRandomString } = require('../utils/generateKeys');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { projectName } = req.body;
    if (!projectName) return res.status(400).json({ error: 'projectName is required' });

    const projectId = generateRandomString(12);
    const apiKey = generateRandomString(24);

    const project = new Project({ projectName, projectId, apiKey });
    await project.save();
    res.status(201).json({ projectId, apiKey });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Delete a project (and related limits/usages)
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneAndDelete({ projectId: id });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    // Optionally: delete related limits/usages here
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}; 