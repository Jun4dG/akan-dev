// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  // Renamed state variable to idNumber
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3382/api/login", {
        id: idNumber,
        password: password,
      });

      console.log("Login successful:", response.data);
      alert("Login successful!");
      // TODO: Implement redirect or state change here
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert(error.response.data.error || "Login failed. Please try again.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Student Portal Login
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Mindanao State University
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
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Forgot password? Contact the admin.
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;