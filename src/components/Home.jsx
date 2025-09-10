import ClassScheduleGrid from "./ClassScheduleGrid";
import AcademicStatus from "./AcademicStatus";
import Notices from "./Notices";
import "../assets/styles/home.css";

// Import your dummy data
import {
  mockStudent,
  mockEnrolledSubjects,
  mockDays,
  mockClassStartTime,
  mockClassEndTime,
} from "../data/mockSchedule";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Welcome back, {mockStudent.name}!</h2>
        <p>Stay updated with your academic journey.</p>
      </header>

      <ClassScheduleGrid
        enrolledSubjects={mockEnrolledSubjects}
        days={mockDays}
        classStartTime={mockClassStartTime}
        classEndTime={mockClassEndTime}
      />

      <aside className="home-right">
        <AcademicStatus />
        <Notices />
        <div className="elibrary-card glass-card">
          <h3>E-Library</h3>
          <button>Go to Library</button>
        </div>
      </aside>
    </div>
  );
};

export default Home;
