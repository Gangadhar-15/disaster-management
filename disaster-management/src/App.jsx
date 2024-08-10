import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import EmergencyContacts from './pages/EmergencyContacts';
import Login from './components/Login';
import SignUp from './components/signup';
import AddDisasterForm from './components/AddDisasterForm'; // Import the AddDisasterForm component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <AddDisasterForm /> {/* Add the AddDisasterForm component */}
      <Footer />
    </Router>
  );
}

export default App;
