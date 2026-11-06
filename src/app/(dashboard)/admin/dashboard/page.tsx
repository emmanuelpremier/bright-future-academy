export default function AdminDashboard() {
  const stats = [
    { name: "Total Students", value: "245", color: "bg-blue-500" },
    { name: "Teachers", value: "32", color: "bg-green-500" },
    { name: "Classes", value: "12", color: "bg-yellow-500" },
    { name: "Parents", value: "198", color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">🎓 Admin Dashboard</h1>
          <a href="/login" className="hover:text-blue-200">Logout</a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="card flex items-center">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                📊
              </div>
              <div>
                <p className="text-gray-600 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="btn-primary">Add Student</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Teacher</button>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700">Add Parent</button>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Publish Results</button>
          </div>
        </div>
      </div>
    </div>
  );
}
