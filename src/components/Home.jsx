import {
  Grid,
  Box,
  Paper,
  Typography,
  Avatar,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import AcademicStatus from "./AcademicStatus";
import Notices from "./Notices";
import { mockStudent } from "../data/mockSchedule";
import ClassScheduleGrid from "./ClassScheduleGrid";
import ELibrary from "./E-LibraryLinkages";

const  Home = () => {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      {/* Welcome Card */}
      <Card
        sx={{
          mb: 3,
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: "gray" }}>
            {mockStudent.name[0]}
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Welcome back, {mockStudent.name}!
            </Typography>
            <Typography variant="body2" color="white">
              Student Portal · Mindanao State University
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* The main layout using the new MUI v5 Grid */}
      <Grid container spacing={2}>
        <Grid size={{xs: 12, md: 9}}>
          <ClassScheduleGrid />
        </Grid>

        <Grid size={{xs: 12, md: 3}}>
          <Stack spacing={2}>
            <Paper>
              <AcademicStatus />
            </Paper>
            <Paper>
              <Notices />
            </Paper>
            <Paper>
              <ELibrary />
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;