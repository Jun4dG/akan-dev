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
  Accordion,
  AccordionSummary,
  useTheme,
  useMediaQuery,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { mockEvaluationData, mockComposites } from "../data/mockSchedule";

export default function Evaluation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box 
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Evaluation
      </Typography>

      {/* Year-Level + Semester Evaluations */}
      {mockEvaluationData.map((evaluation, idx) => (
        <Accordion key={idx} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              {evaluation.yearLevel} - {evaluation.semester}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table
                size={isMobile ? "small" : "medium"}
                sx={{
                  tableLayout: "auto", 
                  "& .MuiTableCell-root": {
                    fontSize: isMobile ? "0.5rem" : "1rem",
                    padding: isMobile ? "1px 2px" : "8px 12px",
                    whiteSpace: "normal", 
                    wordBreak: "break-word", 
                  },
                }}
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: 'grey.200' }}>
                    <TableCell sx={{ width: "12%" }}>Course</TableCell>
                    <TableCell sx={{ width: "40%" }}>Description</TableCell>
                    <TableCell sx={{ width: "10%" }}>Units</TableCell>
                    <TableCell sx={{ width: "10%" }}>Grade</TableCell>
                    <TableCell sx={{ width: "10%" }}>Number Taken</TableCell>
                    <TableCell sx={{ width: "15%" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {evaluation.subjects.map((sub, i) => (
                    <TableRow key={i}>
                      <TableCell>{sub.alias}</TableCell>
                      <TableCell>{sub.description}</TableCell>
                      <TableCell>{sub.units}</TableCell>
                      <TableCell>{sub.grade}</TableCell>
                      <TableCell>{sub.numTaken}</TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{ cursor: "pointer", fontSize: isMobile ? "0.65rem" : "0.8rem" }}
                        >
                          View Prerequisites
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Composites */}
      {mockComposites.map((comp, idx) => (
        <Accordion key={`comp-${idx}`} sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              {comp.category} – (REQUIRED: {comp.required}, COMPLETED:{" "}
              {comp.completed})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Units</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Number Taken</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comp.subjects.map((sub, i) => (
                    <TableRow key={i}>
                      <TableCell>{sub.alias}</TableCell>
                      <TableCell>{sub.description}</TableCell>
                      <TableCell>{sub.units}</TableCell>
                      <TableCell>{sub.grade}</TableCell>
                      <TableCell>{sub.numTaken}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
