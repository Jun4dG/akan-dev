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
        bgcolor: "background.default"
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
              padding: "6px",
              fontWeight: "bold",
              fontSize: { xs: "0.7rem", sm: "0.85rem" },
            },
            "& td": {
              padding: "4px",
              fontSize: { xs: "0.65rem", sm: "0.8rem" },
              wordWrap: "break-word",
              maxWidth: { xs: 60, sm: 100 },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "15%"}} >Course</TableCell>
              <TableCell sx={{ width: "40%"}} >Description</TableCell>
              <TableCell sx={{ width: "10%"}} >Units</TableCell>
              <TableCell sx={{ width: "10%"}} >Section</TableCell>
              <TableCell sx={{ width: "20%"}} >Schedule</TableCell>
              <TableCell sx={{ width: "15%"}} >Room</TableCell>
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
