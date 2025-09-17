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
    <Box sx={{ width: 200 }}>
      {/* Top Logo/Brand */}
      <Toolbar
        sx={{
          marginTop: 2,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img src={logo} alt="Main Logo" style={{ width: 50, marginBottom: 4 }} />
        <Typography variant="subtitle1" noWrap>
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
                px: 1.5,
                "&.active": {
                  bgcolor: "primary.main",
                  color: "white",
                  "& .MuiListItemIcon-root": { color: "white" },
                  "& .MuiListItemText-root": { color: "white" },
                },
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: "0.85rem"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
