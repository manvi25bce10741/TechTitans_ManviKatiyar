import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Login from './pages/Login';
import Signup from './pages/Signup';

function NavigationSidebar() {
  const location = useLocation();

  // If the user is on the Login or Signup portals, hide the sidebar entirely!
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const getLinkClass = (path) => {
    const baseClass = "flex items-center space-x-3 p-3 rounded-xl font-medium transition-all duration-200 ";
    return location.pathname === path
      ? baseClass + "bg-blue-600 text-white shadow-md shadow-blue-900/40"
      : baseClass + "text-slate-400 hover:bg-slate-700/50 hover:text-white";
  };

  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col justify-between hidden md:flex h-screen sticky top-0">
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <span className="text-3xl">⚙️</span>
          <h1 className="text-xl font-bold tracking-tight text-white">SkillVault</h1>
        </div>
        <nav className="space-y-2">
          {/* Changed dashboard destination route mapping to match the safe authenticated view */}
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>
            <span>📊</span> <span>Dashboard</span>
          </Link>
          <Link to="/profile" className={getLinkClass('/profile')}>
            <span>👤</span> <span>Profile Info</span>
          </Link>
          <Link to="/resume" className={getLinkClass('/resume')}>
            <span>📄</span> <span>AI Resume</span>
          </Link>
        </nav>
      </div>
      
      {/* 🔴 NEW ADDITION: Added a functioning Log Out Button to return safely to login portal */}
      <div className="border-t border-slate-700 pt-4 flex flex-col space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">U</div>
          <div>
            <p className="text-sm font-medium text-white">Alex Mercer</p>
            <p className="text-xs text-slate-400">alex@example.com</p>
          </div>
        </div>
        <Link to="/login" className="w-full text-center py-2 bg-slate-700 hover:bg-red-900/40 text-slate-300 hover:text-red-400 border border-slate-600 hover:border-red-900/50 text-xs font-semibold rounded-xl transition">
          🔒 Log Out Securely
        </Link>
      </div>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex w-full">
        <NavigationSidebar />
        
        <Routes>
          {/* 🎯 THE CRUCIAL CHANGE: The primary root landing path '/' now launches the Login Portal */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
