export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-10 bg-white border border-gray-300 rounded-lg shadow-lg text-center font-serif">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 tracking-wide">Ratelim</h1>
      <p className="mb-6 text-gray-700 text-lg">
        Instantly add rate limiting to your apps and APIs. Register your project, set your limits, and track usage in real time with Ratelim.
      </p>
      <ul className="mb-8 text-left list-disc list-inside text-gray-600 text-lg">
        <li>🔑 Register projects and get unique API keys</li>
        <li>⚡ Set custom rate limits per project</li>
        <li>📊 Track usage and remaining quota</li>
        <li>🛡️ Simple REST API integration</li>
      </ul>
      <a href="/register" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-semibold px-8 py-3 rounded shadow hover:from-yellow-500 hover:to-yellow-700 border border-yellow-700 transition text-lg">Get Started</a>
    </div>
  );
} 