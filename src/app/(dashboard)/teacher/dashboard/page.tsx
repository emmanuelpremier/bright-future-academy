export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">👨‍🏫 Teacher Dashboard</h1>
          <a href="/login" className="hover:text-green-200">Logout</a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Assignments</h2>
        
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Class</th>
                  <th className="text-left py-3 px-4">Subject</th>
                  <th className="text-left py-3 px-4">Session</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Primary 5</td>
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="py-3 px-4">2026/2027</td>
                  <td className="py-3 px-4">
                    <button className="btn-primary text-sm">Enter Scores</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Primary 6</td>
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="py-3 px-4">2026/2027</td>
                  <td className="py-3 px-4">
                    <button className="btn-primary text-sm">Enter Scores</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
