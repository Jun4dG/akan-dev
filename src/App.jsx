import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // ✅ added Navigate
import { AuthProvider, useAuth } from "./AuthContext";
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
import Schedule from "./pages/Schedule.jsx";
import Billing from "./pages/Billing.jsx";
import Profile from "./pages/Profile.jsx";
import OfflineNotice from "./components/OfflineNotice.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ display: { xs: "block", sm: "none" } }}
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
          <Typography variant="h7" noWrap component="div">
            MSU-AKAN Student
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 200 },
        }}
      >
        <Sidebar onNavigate={toggleSidebar} />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: 200, boxSizing: "border-box" },
        }}
        open
      >
        <Sidebar />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 0 },
          ml: { sm: "210px" },
          mt: { xs: 8, sm: 0 },
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
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
  );
};

export default App;