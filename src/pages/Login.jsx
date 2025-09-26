import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import msuGateBackground from "../assets/msu-gate.jpg"
import Footer from "../components/Footer"
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(idNumber, password);
      navigate("/home");
    } catch (error) {
      setError("Invalid ID Number or password");
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundImage: `url(${msuGateBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Paper elevation={8} sx={{ p: 4, width: "100%", borderRadius: 3, backgroundColor: 'rgba(255, 255, 255, 0.47)', backdropFilter: 'blur(10px)',  border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px 0 rgba(116, 10, 10, 0.37)',}}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              MSU-AKAN Login
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Mindanao State University - Main Campus
            </Typography>

            <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
              <TextField
                label="ID Number"
                type="text"
                fullWidth
                margin="normal"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                
                slotProps={{
                  input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: 'black' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              />

              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, py: 1.2, borderRadius: 2 }}
              >
                Login
              </Button>
            </Box>

            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    mt: 2 
                }}
            >
                <Button 
                    variant="text" 
                    color="inherit" 
                    onClick={() => console.log('Navigate to Create Account')} //replace later
                    sx={{ textTransform: 'none',  }}
                >
                    Create Account
                </Button>
                <Button 
                    variant="text" 
                    color="inherit" 
                    onClick={() => console.log('Navigate to Forgot Password')} //replace later
                    sx={{ textTransform: 'none' }}
                >
                    Forgot Password
                </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginPage;