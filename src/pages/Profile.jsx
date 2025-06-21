import React, { useEffect, useState } from 'react';
import { IoLogOut } from 'react-icons/io5';
import { FaUser, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('admin');
      if (storedUser && storedUser !== 'undefined') {
        setUser(JSON.parse(storedUser));
      } else {
        navigate('/login'); // Haddii user maqan yahay, dib ugu laabo login
      }
    } catch (error) {
      console.error('Error loading user:', error);
      localStorage.removeItem('admin');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/login');
  };

  if (!user) {
    // Loading spinner fudud
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden relative">
        {/* Logout Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1.5 rounded-md hover:bg-red-200 transition text-sm"
          >
            <IoLogOut className="text-lg" /> Logout
          </button>
        </div>

        {/* Header */}
        <div className="bg-blue-600 p-6 text-white flex items-center gap-4">
          <div className="bg-white p-3 rounded-full">
            {/* Sawir avatar laga sameeyay magaca user-ka */}
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.Name)}&background=white&color=2A4365&size=64`}
              alt={user.Name}
              className="rounded-full w-16 h-16 object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {user.Name}
              <FaCheckCircle className="text-green-400" title="Verified" />
            </h1>
            <p className="text-blue-100">{user.Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
