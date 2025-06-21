import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:300/login', {
        Email,
        Password,
      });

      if (res.data.success) {
        toast.success('Login successful');

        // Hubi in backend uu soo celiyo user data sida Name & Email
        const userData = {
          Name: res.data.data.Name || '', 
          Email: res.data.data.Email || Email,
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(res.data.data.Name || Email)}`
        };

        // Keydi user data isku key "user"
        localStorage.setItem('user', JSON.stringify(userData));

        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error('Incorrect email or password');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl w-[400px] p-6 sm:p-10 text-center space-y-4"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h1>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg mt-4"
        >
          Submit
        </button>
        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <NavLink to="/sign" className="text-indigo-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </form>
      <Toaster />
    </div>
  );
}
