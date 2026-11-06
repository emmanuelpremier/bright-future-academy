export default function ParentDashboard() {
  const children = [
    { name: "John Smith", admission: "BFA001001", class: "Primary 5" },
    { name: "Jane Smith", admission: "BFA001002", class: "Primary 3" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-cyan-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">👨‍👩‍👧‍👦 Parent Portal</h1>
          <a href="/login" className="hover:text-cyan-200">Logout</a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">My Children</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {children.map((child) => (
            <div key={child.admission} className="card text-center">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-2">{child.name}</h3>
              <p className="text-gray-600 mb-1">Admission: {child.admission}</p>
              <p className="text-gray-600 mb-4">Class: {child.class}</p>
              <button className="btn-primary">View Results</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
