import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Remove token on page refresh if it exists
  useEffect(() => {
    // Check if there's a token in localStorage on initial render
    const token = localStorage.getItem('authToken');
    if (token) {
      // If a token is found, remove it on page refresh
      localStorage.removeItem('authToken');
      console.log('Token removed from localStorage on page refresh');
    }
  }, []);

  const login = async (id, password, role) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { id, password, role });
      const { token, name } = response.data;

      // Save the token in localStorage (or cookies for better security)
      localStorage.setItem('authToken', token);
      console.log('Token stored in localStorage:', localStorage.getItem('authToken'));

      setUser({ name, role });
      navigate(role === 'admin' ? '/admin-dashboard' : '/intern-dashboard');
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
