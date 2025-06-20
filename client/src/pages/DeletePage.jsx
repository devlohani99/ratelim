import { useState } from 'react';

export default function DeletePage() {
  const [projectId, setProjectId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete project');
      setMessage('Project deleted successfully!');
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Delete Project</h2>
      <form onSubmit={handleDelete} className="space-y-4">
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="Project ID"
          value={projectId}
          onChange={e => setProjectId(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          placeholder="API Key"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete Project'}
        </button>
      </form>
      {message && <div className={`mt-4 p-3 rounded ${message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message}</div>}
    </div>
  );
} 