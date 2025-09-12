import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";

// Importing MUI icons
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../assets/images/logo.png";

const Sidebar = ({ onNavigate }) => {
  const navItems = [
    { text: "Home", path: "/", icon: <HomeIcon /> },
    { text: "Grades", path: "/grades", icon: <GradeIcon /> },
    { text: "Evaluation", path: "/evaluation", icon: <AssignmentTurnedInIcon /> },
    { text: "Schedule", path: "/schedule", icon: <ScheduleIcon /> },
    { text: "Billing", path: "/billing", icon: <ReceiptIcon /> },
    { text: "Profile", path: "/profile", icon: <AccountCircleIcon /> },
  ];

  return (
    <Box sx={{ width: 240 }}>
      {/* Top Logo/Brand */}
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <img src={logo} alt="Main Logo" style={{ width: 80, marginBottom: 8 }} />
        <Typography variant="h6" noWrap>
          MSU-AKAN Student
        </Typography>
      </Toolbar>
      <Divider />

      {/* Navigation Links */}
      <List>
        {navItems.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={path}
              onClick={onNavigate}
              sx={{
                "&.active": {
                  bgcolor: "primary.main",
                  color: "white",
                  "& .MuiListItemIcon-root": { color: "white" },
                  "& .MuiListItemText-root": { color: "white" },
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
