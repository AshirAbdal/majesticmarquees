'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "password";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Majestic Marquees</h1>
          <p className="mt-1 text-sm text-gray-500">Admin Panel</p>
        </div>
        <form
          onSubmit={handleLogin}
          className="w-full p-8 bg-white rounded-2xl shadow-md"
        >
          <h2 className="mb-6 text-xl font-semibold text-gray-700">Sign in</h2>

          {error && (
            <div className="mb-4 px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none text-sm focus:ring-2 focus:ring-gray-300"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none text-sm focus:ring-2 focus:ring-gray-300"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;