import Link from "next/link";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">🎓 Bright Future Academy</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/about" className="hover:text-blue-200">About</Link>
              <Link href="/academics" className="hover:text-blue-200">Academics</Link>
              <Link href="/admissions" className="hover:text-blue-200">Admissions</Link>
              <Link href="/contact" className="hover:text-blue-200">Contact</Link>
              <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Academic Programs</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">👶 Pre-Nursery</h3>
            <p className="text-gray-600 mb-2">Ages 2-3 years</p>
            <p className="text-gray-700">Play-based learning for early childhood development.</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">🎈 Nursery</h3>
            <p className="text-gray-600 mb-2">Ages 3-5 years (Nursery 1 & 2)</p>
            <p className="text-gray-700">Building foundation in reading, writing and numeracy.</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">✏️ Primary School</h3>
            <p className="text-gray-600 mb-2">Primary 1 - Primary 6 (Ages 6-11 years)</p>
            <p className="text-gray-700">Comprehensive education across all core subjects.</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">🎓 Secondary School</h3>
            <p className="text-gray-600 mb-2">JSS 1-3 & SSS 1-3 (Ages 12-17 years)</p>
            <p className="text-gray-700">WAEC/NECO preparation with diverse subject offerings.</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Bright Future Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
