import Link from "next/link";

export default function AdmissionsPage() {
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Admissions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admission Requirements</h2>
          <div className="card">
            <ul className="space-y-2 text-gray-700">
              <li>• Birth certificate</li>
              <li>• Previous school report card (if applicable)</li>
              <li>• Transfer letter (if applicable)</li>
              <li>• 2 passport photographs</li>
              <li>• Completed admission form</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Application Procedure</h2>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-semibold">1. Obtain Application Form</h3>
              <p className="text-gray-600">Visit the school or contact our admissions office</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">2. Submit Documents</h3>
              <p className="text-gray-600">Complete form with all required documents</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">3. Assessment/Interview</h3>
              <p className="text-gray-600">Attend interview or entrance examination</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">4. Admission Offer</h3>
              <p className="text-gray-600">Receive admission letter and complete registration</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">Contact Us for More Information</Link>
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
