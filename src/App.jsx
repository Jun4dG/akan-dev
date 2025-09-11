import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grades from "./pages/Grades.jsx";
import Evaluation from "./pages/Evaluation.jsx";
import Schedule from "./components/ClassScheduleGrid.jsx";
import Billing from "./pages/Billing.jsx";
import Profile from "./pages/Profile.jsx";
import OfflineNotice from "./components/OfflineNotice.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-layout">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
          
        <Sidebar isOpen={sidebarOpen} />

        <div className="page-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/evaluation" element={<Evaluation />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/offline" element={<OfflineNotice />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
