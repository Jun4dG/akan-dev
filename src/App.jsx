import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Grades from "./pages/Grades.jsx";
import Evaluation from "./pages/Evaluation.jsx";
import Schedule from "./components/ClassScheduleGrid.jsx";
import Billing from "./pages/Billing.jsx";
import Profile from "./pages/Profile.jsx";
import OfflineNotice from "./components/OfflineNotice.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* ✅ AppBar only on mobile */}
        <AppBar
          position="fixed"
          sx={{
            display: { xs: "block", sm: "none" }, // show only on mobile
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleSidebar}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              MSU-AKAN Student
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Sidebar (Drawer for mobile) */}
        <Drawer
          variant="temporary"
          open={sidebarOpen}
          onClose={toggleSidebar}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: 240 },
          }}
        >
          <Sidebar onNavigate={toggleSidebar} />
        </Drawer>

        {/* Desktop Sidebar (always visible) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
          }}
          open
        >
          <Sidebar />
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 1, sm: 3 }, // less padding on mobile
            ml: { sm: "240px" }, // push content for sidebar on desktop
            mt: { xs: 8, sm: 0 }, // top margin only on mobile (for AppBar)
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/offline" element={<OfflineNotice />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
