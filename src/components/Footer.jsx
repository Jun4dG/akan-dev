import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        px: 3,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        MSU-AKAN Student
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        This page is maintained by the Information and Communications Technology (ICTC), Mindanao State University, Marawi City
      </Typography>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        All rights reserved © 2025 MSU-Main Campus
      </Typography>
    </Box>
  );
}
