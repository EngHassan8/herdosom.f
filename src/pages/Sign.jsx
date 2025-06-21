import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

export default function Sign() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      // Hubi URL-ka backend-kaaga port-kiisa
      const res = await axios.post('http://localhost:300/diwaanGalin', {
        Name,
        Email,
        Password,
      });

      if (res.data) {
        // Keydi xogta user localStorage
        const userData = {
          name: Name,
          email: Email,
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(Name)}`
        };
        localStorage.setItem("user", JSON.stringify(userData));

        toast.success('Signed up successfully');
        navigate('/login'); // ama bogga aad rabto
      }
    } catch (error) {
      // Daabac faahfaahinta error-ka console-ka
      console.error("Axios error:", error.response || error.message || error);
      toast.error('Something went wrong during sign up');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSign}
        className="bg-white shadow-lg rounded-2xl w-[450px] p-8 text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[50px] mb-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="text"
          placeholder="Enter Your Name"
          required
        />
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[50px] mb-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[50px] mb-6 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Submit
        </button>
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <NavLink to="/login" className="text-indigo-500 hover:underline">
            Login
          </NavLink>
        </p>
      </form>
      <Toaster />
    </div>
  );
}
