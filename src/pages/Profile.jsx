import React from 'react';

function Profile() {
  const skills = ['React.js', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Python'];

  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      <h2 className="text-3xl font-extrabold text-white mb-6">Student Profile</h2>
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-bold text-2xl text-white shadow-lg">U</div>
          <div>
            <h3 className="text-2xl font-bold text-white">Alex Mercer</h3>
            <p className="text-slate-400">Computer Science Student</p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Verified Skills Vault</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-xl">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
