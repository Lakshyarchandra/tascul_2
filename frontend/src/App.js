import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import InternDashboard from './components/InternDashboard';
import Footer from './components/Footer';  // Import Footer
import AuthContextProvider from './context/Authcontext';

function App() {
  return (
    <Router>
      {/* Wrap AuthContextProvider inside Router */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/intern-dashboard" element={<InternDashboard />} />
        </Routes>
        <Footer />  {/* Add Footer here, after the Routes */}
      </AuthContextProvider>
    </Router>
  );
}

export default App;
