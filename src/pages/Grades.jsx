import { useState } from "react";
import { mockGrades } from "../data/mockSchedule";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
  Stack,
  Divider
} from "@mui/material";

const Grades = () => {
  const [grades] = useState(mockGrades);
  const [selectedYear, setSelectedYear] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getValidGrade = (sub) => {
    const grade = parseFloat(sub.grade);
    const completed = parseFloat(sub.compGrade);

    if (!isNaN(grade)) {
      return grade;
    } else if (sub.grade === "INC") {
      if (!isNaN(completed)) {
        return completed;
      } else {
        return null;
      }
    } else if (sub.grade === "DRP" || sub.grade === "5.00") {
      return 5.0;
    }
    return null;
  };

  const calculateGPA = (subjects) => {
    let totalUnits = 0;
    let weightedSum = 0;

    subjects.forEach((sub) => {
      const validGrade = getValidGrade(sub);
      if (validGrade !== null) {
        totalUnits += sub.units;
        weightedSum += validGrade * sub.units;
      }
    });

    return totalUnits > 0 ? (weightedSum / totalUnits).toFixed(2) : "N/A";
  };

  const calculateCGPA = (currentYear) => {
    let totalUnits = 0;
    let weightedSum = 0;

    grades.forEach((year) => {
      if (
        year.yearEnrolled < currentYear.yearEnrolled ||
        (year.yearEnrolled === currentYear.yearEnrolled &&
          year.semester <= currentYear.semester)
      ) {
        year.subjects.forEach((sub) => {
          const validGrade = getValidGrade(sub);
          if (validGrade !== null) {
            totalUnits += sub.units;
            weightedSum += validGrade * sub.units;
          }
        });
      }
    });

    return totalUnits > 0 ? (weightedSum / totalUnits).toFixed(2) : "N/A";
  };

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, maxWidth: 1200, mx: 'auto' }}>
      {grades.length > 0 ? (
        grades.map((year, idx) => (
          <Card
            key={idx}
            sx={{
              mb: 3,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 0 }
                }}
              >
                <Typography variant="h6">
                  {year.yearEnrolled} - {year.semester}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setSelectedYear(year)}
                >
                  View GPA | CGPA
                </Button>
              </Box>

              {/* Responsive Table for Desktop View */}
              {!isMobile && (
                <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                  <Table>
                    <TableHead sx={{ bgcolor: 'grey.200' }}>
                      <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell>Descriptive Title</TableCell>
                        <TableCell>Faculty Assigned</TableCell>
                        <TableCell>Units</TableCell>
                        <TableCell>Final</TableCell>
                        <TableCell>Completed</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {year.subjects.map((sub, sIdx) => (
                        <TableRow key={sIdx}>
                          <TableCell>{sub.name}</TableCell>
                          <TableCell>{sub.description}</TableCell>
                          <TableCell>{sub.faculty.join(", ")}</TableCell>
                          <TableCell>{sub.units.toFixed(2)}</TableCell>
                          <TableCell
                            sx={{
                              color: sub.grade === "INC" || sub.grade === "DRP" || sub.grade === "5.00"
                                ? "error.dark"
                                : "text.primary",
                            }}
                          >
                            {sub.grade}
                          </TableCell>
                          <TableCell
                            sx={{
                              color: sub.compGrade !== "5.0" && !isNaN(parseFloat(sub.compGrade)) && sub.grade === "INC"
                                ? "success.dark"
                                : "error.main",
                            }}
                          >
                            {sub.compGrade}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              {/* Card-based layout for Mobile View */}
              {isMobile && (
                <Stack spacing={2}>
                  {year.subjects.map((sub, sIdx) => (
                    <Paper key={sIdx} sx={{ p: 2, borderRadius: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {sub.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {sub.description}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Typography variant="body2">
                        <strong>Units:</strong> {sub.units.toFixed(2)}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Faculty:</strong> {sub.faculty.join(", ")}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        <Chip
                          label={`Final: ${sub.grade}`}
                          color={
                            sub.grade === "INC" || sub.grade === "DRP" || sub.grade === "5.00"
                              ? "error"
                              : "success"
                          }
                          size="small"
                        />
                        <Chip
                          label={`Completed: ${sub.compGrade}`}
                          color={
                            sub.compGrade !== "5.0" && !isNaN(parseFloat(sub.compGrade)) && sub.grade === "INC"|| sub.compGrade === ""
                              ? "success"
                              : "error"
                          }
                          size="small"
                        />
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography align="center">No Data yet available.</Typography>
      )}

      {/* GPA / CGPA Dialog */}
      <Dialog open={Boolean(selectedYear)} onClose={() => setSelectedYear(null)}>
        <DialogTitle>
          GPA & CGPA -{" "}
          {selectedYear && `${selectedYear.yearEnrolled} ${selectedYear.semester}`}
        </DialogTitle>
        <DialogContent>
          <Typography>
            <strong>GPA:</strong>{" "}
            {selectedYear && calculateGPA(selectedYear.subjects)}
          </Typography>
          <Typography>
            <strong>CGPA:</strong>{" "}
            {selectedYear && calculateCGPA(selectedYear)}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedYear(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Grades;