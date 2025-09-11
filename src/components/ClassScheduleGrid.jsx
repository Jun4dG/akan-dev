import "../assets/styles/classSchedGrid.css";
import { mockEnrolledSubjects } from "../data/mockSchedule.js";

const ClassScheduleGrid = () => {
  const mockDays = ["M", "T", "W", "H", "F", "S", "A"];
  const mockClassStartTime = 6; // 6 AM
  const mockClassEndTime = 20; // 7 PM

  // Parse schedules
  const schedules = {};
  mockDays.forEach((d) => (schedules[d] = []));

  const parseTime = (time) => {
    let [h, m] = time.split(":").map(Number);
    return h + m / 60; // decimal hours
  };

  mockEnrolledSubjects.forEach((enroll) => {
    const sked = enroll.SCHEDULE?.split(" ") || [];
    for (let i = 0; i < sked.length; i += 2) {
      const day = sked[i];
      const [start, end] = sked[i + 1]?.split("-") || [];
      if (!start || !end) continue;

      schedules[day].push({
        sub: enroll.ALIAS,
        desc: enroll.DESCRIPTION,
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
    <div className="classschedgrid glass-card">
      <table id="student-schedule-grid">
        <thead>
          <tr>
            <th>Time</th>
            {mockDays.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {Array.from({ length: mockClassEndTime - mockClassStartTime }, (_, i) => {
              const hour = mockClassStartTime + i;
              const cellStart = hour;
              const cellEnd = hour + 1;

              return (
                <tr key={hour}>
                  <td className="time-col">{formatHour(hour)}</td>
                  {mockDays.map((d) => {
                    // Find all subjects active during this hour
                    const subjects = schedules[d].filter(
                      (s) => s.start < cellEnd && s.end > cellStart
                    );

                    return (
                      <td key={`${d}-${hour}`} className="time-slot">
                        {subjects.map((s, idx) => (
                          <div key={idx} className="subject-block">
                            <b className="subject">{s.sub}</b>
                            <br />
                            <br />
                            <small>{s.room}</small>
                            <small>{s.faculty}</small>
                          </div>
                        ))}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
      </table>
    </div>
  );
};

export default ClassScheduleGrid;
