import Link from "next/link";

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>📍 Address:</strong><br />123 Education Street, Learning City</p>
              <p><strong>📞 Phone:</strong><br />+123-456-7890</p>
              <p><strong>📧 Email:</strong><br />info@brightfutureacademy.edu</p>
              <p><strong>🌐 Website:</strong><br />www.brightfutureacademy.edu</p>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email Address" className="input" />
              <input type="text" placeholder="Subject" className="input" />
              <textarea placeholder="Message" rows={4} className="input"></textarea>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
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
