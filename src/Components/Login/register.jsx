import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (!showPassword) {
      setPassword(suggestPassword()); // Suggest a password when showing
    }
  };

  const suggestPassword = () => {
    return Math.random().toString(36).slice(-20);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        gender,
        mobile,
        email,
        password,
      });

      if (response.status === 201) {
        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify({ name, email }));

        // Redirect to login screen
        navigate('/clinic-login');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <Box className="bg-gray-700 py-20">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Create Your Account
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Enter your details to register
          </p>

          <form onSubmit={handleRegister}>
            <div className="w-full mt-4">
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-white-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-white-300"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('gender').focus(); } }}
              />
            </div>
            <div className="w-full mt-4">
              <input
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-white-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-white-300"
                type="text"
                placeholder="Gender"
                aria-label="Gender"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('mobile').focus(); } }}
              />
            </div>
            <div className="w-full mt-4">
              <input
                id="mobile"
                value={mobile}
                onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setMobile(value);
                }}
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-white-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-white-300"
                type="text"
                placeholder="Mobile No"
                aria-label="Mobile No"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('email').focus(); } }}
              />
            </div>
            <div className="w-full mt-4">
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-white-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-white-300"
                type="email"
                placeholder="Email"
                aria-label="Email"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('password').focus(); } }}
              />
            </div>
            <div className="w-full mt-4">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-white-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-white-300"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                aria-label="Password"
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?{' '}
          </span>

          <Link to="/clinic-login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default Register;