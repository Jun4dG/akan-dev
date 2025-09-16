import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { mockEnrolledSubjects } from "../data/mockSchedule";

export default function ClassScheduleGrid() {
  const mockDays = ["M", "T", "W", "H", "F", "S", "A"];
  const mockClassStartTime = 6;
  const mockClassEndTime = 20;

  const schedules = {};
  mockDays.forEach((d) => (schedules[d] = []));

  const parseTime = (time) => {
    let [h, m] = time.split(":").map(Number);
    return h + m / 60;
  };

  mockEnrolledSubjects.forEach((enroll) => {
    const sked = enroll.SCHEDULE?.split(" ") || [];
    for (let i = 0; i < sked.length; i += 2) {
      const day = sked[i];
      const [start, end] = sked[i + 1]?.split("-") || [];
      if (!start || !end) continue;

      schedules[day].push({
        sub: enroll.ALIAS,
        room: enroll.ROOM,
        faculty: enroll.FACULTY,
        start: parseTime(start),
        end: parseTime(end),
      });
    }
  });

  const formatHour = (hour) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formatted = hour % 12 === 0 ? 12 : hour % 12;
    return `${formatted}:00 ${period}`;
  };

  return (
    <Box sx={{ width: "100%"}}>
      <Typography>
        <strong>Class schedule for this semester</strong>
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
        }}
      >
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
              padding: "4px",
              fontSize: { xs: "0.65rem", sm: "0.8rem" },
              wordWrap: "break-word",
              maxWidth: { xs: 60, sm: 100 },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              {mockDays.map((d) => (
                <TableCell key={d}>{d}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: mockClassEndTime - mockClassStartTime }, (_, i) => {
              const hour = mockClassStartTime + i;
              const cellStart = hour;
              const cellEnd = hour + 1;

              return (
                <TableRow key={hour}>
                  <TableCell>{formatHour(hour)}</TableCell>
                  {mockDays.map((d) => {
                    const subjects = schedules[d].filter(
                      (s) => s.start < cellEnd && s.end > cellStart
                    );

                    return (
                      <TableCell key={`${d}-${hour}`}>
                        {subjects.map((s, idx) => (
                          <Box key={idx} sx={{ mb: 1, borderRadius: 1, color: "white", boxShadow: 1, bgcolor: "primary.light"}}>
                            <Typography variant="body2" sx={{ fontSize: { xs: "90%"} }}>
                              {s.sub}
                            </Typography>
                          </Box>
                        ))}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
