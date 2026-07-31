import React, { useState } from 'react';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    course: '',
    issuer: '',
    date: '',
    category: 'Course'
  });
    const handleConfirmSubmit = (e) => {
    e.preventDefault();
    
    // Later: Member 2 and 3 will plug in their database API here!
    // Example: fetch('http://localhost:5000/api/certificates', { method: 'POST', body: JSON.stringify(formData) })

    alert(`🎉 Success! "${formData.course || 'Certificate'}" has been verified and saved to the SkillVault Database securely!`);
  };


  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setIsProcessing(true);

      // --- 🌐 CHANNELS FOR MEMBER 2 & 4 INTEGRATION ---
      // When Member 2 finishes the server, uncomment this block to pipeline real data!
      /*
      try {
        const uploadData = new FormData();
        uploadData.append('certificate', selectedFile);

        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: uploadData,
        });
        const result = await response.json();
        
        // This sets Member 4's real AI extracted data!
        setFormData({
          course: result.course || '',
          issuer: result.issuer || '',
          date: result.date || '',
          category: result.category || 'Course'
        });
      } catch (error) {
        console.error("Backend pipeline error:", error);
      }
      */

      // --- 🎭 HACKATHON BACKUP DEMO MODE ---
      // Simulating Member 4's Gemini AI parsing text extraction layout block
      setTimeout(() => {
        setFormData({
          course: 'Python Programming Masterclass',
          issuer: 'Coursera',
          date: '2026-07-30',
          category: 'Course'
        });
        setIsProcessing(false);
      }, 1500);
    }
  };

  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Console Overview</h2>
          <p className="text-sm text-slate-400 mt-1">Upload files and manage automated verification pipelines</p>
        </div>
      </header>

      {/* TOP STATS CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm">
          <p className="text-sm text-slate-400 font-medium">Total Credentials</p>
          <p className="text-3xl font-bold text-white mt-2">12</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm">
          <p className="text-sm text-slate-400 font-medium">Verified Skills</p>
          <p className="text-3xl font-bold text-emerald-400 mt-2">24</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm">
          <p className="text-sm text-slate-400 font-medium">Resume Status</p>
          <p className="text-3xl font-bold text-blue-400 mt-2">Optimised</p>
        </div>
      </section>

      {/* WORKSPACE REGION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* DOTTED UPLOAD BOX */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center items-center min-h-[300px]">
          <div className="border-2 border-dashed border-slate-600 hover:border-blue-500 rounded-xl p-8 w-full h-full flex flex-col items-center justify-center text-center transition group relative cursor-pointer">
            <input 
              type="file" 
              accept=".pdf" 
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            <span className="text-4xl mb-4 group-hover:scale-110 transition transform">📤</span>
            <p className="text-base font-semibold text-white">Click or drag certificate PDF here</p>
            <p className="text-xs text-slate-400 mt-1">Supports digital credential uploads up to 10MB</p>
            
            {file && (
              <div className="mt-4 p-2 bg-blue-600/20 border border-blue-500 text-blue-300 text-xs rounded-lg font-medium">
                📄 Loaded: {file.name}
              </div>
            )}
          </div>
        </div>

        {/* SMART FORM ENGINE */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="mr-2">🤖</span> AI Processing Form
          </h3>
          
          <form className="space-y-4" onSubmit={handleConfirmSubmit}>

            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Course Name</label>
              <input 
                type="text" 
                value={isProcessing ? "AI is reading document text..." : formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                placeholder="Awaiting pipeline document extraction..." 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Issuer</label>
                <input 
                  type="text" 
                  value={isProcessing ? "Reading..." : formData.issuer}
                  onChange={(e) => setFormData({...formData, issuer: e.target.value})}
                  placeholder="e.g. Udemy" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition"
                >
                  <option>Course</option>
                  <option>Degree</option>
                  <option>Bootcamp</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Issue Date</label>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button type="submit" className="w-full mt-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-950/20">
              Confirm & Save to Record
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;
