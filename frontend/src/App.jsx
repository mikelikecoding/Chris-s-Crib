import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Navbar is inside Header
import Footer from './Components/Footer'; // Assuming Footer is used in your app
import Home from './Components/Home'; // Your Home page
import Services from './Components/Services'; // Your Services page
import Donations from './Components/Donations'; // Your Donations page
import Contact from './Components/Contact'; // Your Contact page
import './styles.css'
// import Login from './Components/Admin/Login';
// import AdminDashboard from "./Components/Admin/AdminDashboard";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define Routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        {/* <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
