import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // This will redirect you straight to the dashboard when you click sign in
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-600 rounded-xl text-white mb-3 text-2xl font-bold">
            ⚙️
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">SkillVault</h2>
          <p className="text-sm text-slate-400 mt-2">Sign in to your digital portfolio terminal</p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@university.edu"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-950/50">
            Sign In to Dashboard
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 mt-8">
          New to the pipeline?{' '}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium transition">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login; // This is the default export that fixes your error!
