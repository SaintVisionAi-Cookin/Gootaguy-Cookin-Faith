import React, { useEffect, useState } from 'react';

export default function AdminLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with real fetch from Supabase events table
    setTimeout(() => {
      setLogs([
        { type: 'ai_query', count: 12 },
        { type: 'ai_response', count: 12 },
        { type: 'voice_input', count: 3 },
        { type: 'webhook_triggered', count: 5 },
        { type: 'upgrade_clicked', count: 2 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-gold">Admin Logs</h1>
      <button
        onClick={() => window.location.reload()}
        className="bg-gold text-black px-6 py-3 rounded font-bold shadow hover:bg-yellow-400 mb-6"
      >
        Manual Refresh
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full max-w-xl bg-gray-900 rounded-lg p-6 mt-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Summary Counts</h2>
          <ul>
            {logs.map(log => (
              <li key={log.type} className="mb-2">
                <span className="font-bold text-gold">{log.type}:</span> {log.count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
