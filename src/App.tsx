import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import Home from './components/Home';
import ApplicationForm from './components/ApplicationForm';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import AdminDashboard from './pages/AdminDashboard';
import SponsorSection from './pages/SponsorSection';
import StatusCheck from './pages/StatusCheck';
import ClosedScreen from './pages/ClosedScreen';
import ApplicationSubmitted from './pages/ApplicationSubmitted';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply/step1" element={<ApplicationForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/involved" element={<GetInvolved />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/sponsor" element={<SponsorSection />} />
      <Route path="/status-check" element={<StatusCheck />} />
      <Route path="/closed" element={<ClosedScreen />} />
      <Route path="/application-submitted" element={<ApplicationSubmitted />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
