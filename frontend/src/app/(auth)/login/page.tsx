'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password,
        }),
      });

      const data = await response.json();

      // Handle errors
      if (!response.ok) {
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      console.log('Login successful:', data.user);

      // Redirect to dashboard
      router.push('/dashboard');

    } catch (err) {
      console.error('Login error:', err);
      setError('Cannot connect to server. Make sure backend is running on port 5000.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1D1D1D] flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B4B8A] to-[#9B5D79] rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h1 className="text-3xl font-bold text-[#E7D4D7]">sockRat</h1>
          </Link>
          <h2 className="text-2xl font-bold text-[#E7D4D7] mb-2">Welcome Back</h2>
          <p className="text-[#A67B9E]">Login to continue your learning journey</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#3A3A3A] rounded-2xl p-8 border border-[#5B4B8A] shadow-lg">
          
          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label 
                htmlFor="email"
                className="block text-[#E7D4D7] mb-2 text-sm font-medium"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#5B4B8A] rounded-lg text-[#E7D4D7] placeholder-[#A67B9E]/50 focus:outline-none focus:border-[#A67B9E] focus:ring-2 focus:ring-[#A67B9E]/20 transition-all"
                placeholder="your@email.com"
                required
                autoComplete="email"
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div>
              <label 
                htmlFor="password"
                className="block text-[#E7D4D7] mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#5B4B8A] rounded-lg text-[#E7D4D7] placeholder-[#A67B9E]/50 focus:outline-none focus:border-[#A67B9E] focus:ring-2 focus:ring-[#A67B9E]/20 transition-all"
                placeholder="••••••••"
                required
                autoComplete="current-password"
                disabled={loading}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#5B4B8A] bg-[#1D1D1D] text-[#5B4B8A] focus:ring-[#5B4B8A]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#A67B9E]">
                  Remember me
                </label>
              </div>
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#A67B9E] hover:text-[#E7D4D7] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#5B4B8A] to-[#9B5D79] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Logging in...</span>
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-6 pt-6 border-t border-[#5B4B8A]/30">
            <p className="text-center text-[#A67B9E] text-sm">
              Don&apos;t have an account?{' '}
              <Link 
                href="/signup" 
                className="text-[#E7D4D7] hover:underline font-medium"
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-sm text-[#A67B9E] hover:text-[#E7D4D7] transition-colors inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}