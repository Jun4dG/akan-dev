import React from "react";
import ClassScheduleGrid from "../components/ClassScheduleGrid";

const Schedule = ({ collegeInfo, enrolledSubjects, days, classStartTime, classEndTime }) => {
  return (
    <div id="schedule-table">
      <p className="title-label">
        Class schedule for this {collegeInfo.ENROLLMENTSEM}, {collegeInfo.ENROLLMENTYER}
      </p>

      <table className="table table-striped table-hover" id="cancel-enrolled-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Description</th>
            <th>Units</th>
            <th>Section</th>
            <th>Schedule</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {enrolledSubjects && enrolledSubjects.length > 0 ? (
            enrolledSubjects.map((sub, idx) => (
              <tr key={idx} title={`Faculty: ${sub.FACULTY || "None Assigned"}`}>
                <td>{sub.ALIAS}</td>
                <td>{sub.DESCRIPTION}</td>
                <td>{sub.UNITS}</td>
                <td>{sub.SECTION}</td>
                <td>{sub.SCHEDULE}</td>
                <td>{sub.ROOM}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <p className="information-message">No enrolled courses to monitor.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <hr />

      <ClassScheduleGrid
      />
    </div>
  );
};

export default Schedule;
