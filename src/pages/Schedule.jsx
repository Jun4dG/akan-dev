import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "../data/mockSchedule";
import ClassScheduleGrid from "../components/ClassScheduleGrid";
import { mockEnrolledSubjects } from "../data/mockSchedule";

export default function Schedule() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      {/* Top Table: Schedule Information */}
      <TableContainer component={Paper} sx={{ mb: 3, width: "100%" }}>
        <Table
          stickyHeader
          size="small"
          sx={{
            tableLayout: "fixed",
            width: "100%", 
            "& th": {
              bgcolor: "grey.200",
              color: "black",
              textAlign: "center",
              padding: "6px",
              fontSize: { xs: "0.7rem", sm: "0.85rem" },
            },
            "& td": {
              textAlign: "center",
              padding: "2px",
              fontSize: { xs: "0.65rem", sm: "0.8rem" },
              wordWrap: "break-word",
              maxWidth: { xs: 60, sm: 100 },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Units</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Schedule</TableCell>
              <TableCell>Room</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEnrolledSubjects.map((subj, idx) => (
              <TableRow key={idx}>
                <TableCell>{subj.ALIAS}</TableCell>
                <TableCell>{subj.DESCRIPTION}</TableCell>
                <TableCell>{subj.UNITS}</TableCell>
                <TableCell>{subj.SECTION}</TableCell>
                <TableCell>{subj.SCHEDULE}</TableCell>
                <TableCell>{subj.ROOM}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Grid: Class Schedule */}
      <ClassScheduleGrid />
    </Box>
  );
}
