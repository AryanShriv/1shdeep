import './App.css';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar/Navbar.jsx'
import LoginPage from './LoginPage/LoginPage.jsx';
import AdminPanel from './AdminPanel/AdminPanel.jsx'
import WorkAdmin from './AdminPanel/Work-Admin.jsx'
import ClientAdmin from './AdminPanel/Clients-Admin.jsx'
import TestimonialAdmin from './AdminPanel/Testimonials-Admin.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/AdminPanel" element={<AdminPanel />} />
          <Route exact path="/Work" element={<WorkAdmin />} />
          <Route exact path="/Clients" element={<ClientAdmin />} />
          <Route exact path="/Testimonials" element={<TestimonialAdmin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
