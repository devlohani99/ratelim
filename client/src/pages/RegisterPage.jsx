import { useState } from 'react';
import useProjectStore from '../store/useProjectStore';

export default function RegisterPage() {
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { setProject } = useProjectStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to register');
      setProject({ projectId: data.projectId, apiKey: data.apiKey });
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-300 rounded-lg shadow-lg font-serif">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 tracking-wide">Register Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-semibold py-2 rounded shadow hover:from-yellow-500 hover:to-yellow-700 border border-yellow-700 transition"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
      {success && (
        <div className="mt-6 bg-green-100 text-green-800 border border-green-300 p-4 rounded text-center text-lg font-medium">
          <div><b>Project Registered!</b></div>
          <div>Project ID: <span className="font-mono">{useProjectStore.getState().projectId}</span></div>
          <div>API Key: <span className="font-mono">{useProjectStore.getState().apiKey}</span></div>
        </div>
      )}
    </div>
  );
} 