import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import NotFound from './pages/NotFound';
import ApplicationForm from './pages/ApplicationForm';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import ChangePassword from './pages/ChangePassword';
import ChangeName from './pages/ChangeName';
// ✅ No need to import ProtectedRoute if it's not used
// import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    setIsAdminLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/admin/login" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />

          {/* 🔐 Protected only Admin Panel */}
          <Route path="/admin" element={<AdminPanel />} />

          {/* 🛠️ These two are now public */}
          <Route path="/admin/change-name" element={<ChangeName />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
