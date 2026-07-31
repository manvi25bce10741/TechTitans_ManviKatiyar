import React from 'react';

function Resume() {
  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-white">AI Resume Builder</h2>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-5 rounded-xl transition shadow-lg shadow-blue-950/50">
          ✨ Generate Resume
        </button>
      </div>
      <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-8 max-w-3xl min-h-[600px] border border-slate-200 mx-auto">
        <div className="text-center border-b pb-6 mb-6">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">ALEX MERCER</h1>
          <p className="text-sm text-slate-600 mt-1">alex.mercer@email.com | +1 (555) 019-2834</p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-bold text-blue-700 tracking-wide uppercase border-b pb-1 mb-2">Technical Skills</h3>
            <p className="text-sm leading-relaxed text-slate-700">React.js, Tailwind CSS, JavaScript, Node.js, MongoDB, Python</p>
          </div>
          <div>
            <h3 className="text-md font-bold text-blue-700 tracking-wide uppercase border-b pb-1 mb-2">Verified Credentials</h3>
            <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
              <li><strong>Python Programming Masterclass</strong> — Issued by Coursera (Verified via SkillVault Engine)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
