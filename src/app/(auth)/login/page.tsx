"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // TODO: Implement authentication
    if (formData.username === "admin" && formData.password === "admin123") {
      window.location.href = "/admin/dashboard";
    } else if (formData.username === "teacher" && formData.password === "teacher123") {
      window.location.href = "/teacher/dashboard";
    } else if (formData.username === "parent" && formData.password === "parent123") {
      window.location.href = "/parent/dashboard";
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">🎓 Bright Future Academy</h1>
          <p className="text-gray-600 mt-2">School Management System</p>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username or Email
              </label>
              <input
                type="text"
                className="input"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="input"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
          
          <div className="text-center mt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Back to Home
            </Link>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>Demo: admin/admin123, teacher/teacher123, parent/parent123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
