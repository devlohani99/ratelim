import { useState } from 'react';
import useProjectStore from '../store/useProjectStore';

export default function LimitPage() {
  const { projectId } = useProjectStore();
  const [limit, setLimit] = useState('');
  const [windowVal, setWindowVal] = useState('hour');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [inputProjectId, setInputProjectId] = useState(projectId || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/limits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: inputProjectId, limit: Number(limit), window: windowVal }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to set limit');
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-300 rounded-lg shadow-lg font-serif">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 tracking-wide">Set Rate Limit</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          placeholder="Project ID"
          value={inputProjectId}
          onChange={e => setInputProjectId(e.target.value)}
          required
        />
        <input
          type="number"
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          placeholder="Limit (e.g. 100)"
          value={limit}
          onChange={e => setLimit(e.target.value)}
          required
        />
        <select
          className="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none focus:border-blue-700 transition"
          value={windowVal}
          onChange={e => setWindowVal(e.target.value)}
        >
          <option value="minute">Minute</option>
          <option value="hour">Hour</option>
          <option value="day">Day</option>
        </select>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-semibold py-2 rounded shadow hover:from-yellow-500 hover:to-yellow-700 border border-yellow-700 transition"
          disabled={loading}
        >
          {loading ? 'Setting...' : 'Set Limit'}
        </button>
      </form>
      {error && <div className="text-red-600 mt-4 text-center">{error}</div>}
      {success && <div className="mt-6 bg-green-100 text-green-800 border border-green-300 p-4 rounded text-center text-lg font-medium">Limit set successfully!</div>}
    </div>
  );
} 