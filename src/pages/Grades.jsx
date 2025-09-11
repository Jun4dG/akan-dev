import "../assets/styles/grades.css"
import { useState } from "react"
import { mockGrades } from "../data/mockSchedule"

export default function Grades() {
  const [grades] = useState(mockGrades)
  const [selectedYear, setSelectedYear] = useState(null)

  // ✅ Decide which grade should be counted
  const getValidGrade = (sub) => {
    const grade = parseFloat(sub.grade)
    const completed = parseFloat(sub.compGrade)

    if (!isNaN(grade)) {
      return grade
    } else if (sub.grade === "INC") {
      if (!isNaN(completed)) {
        return completed
      } else {
        return null
      }
    } else if (sub.grade === "DRP" || sub.grade === "5.00") {
      return 5.0
    }
    return null
  }

  const calculateGPA = (subjects) => {
    let totalUnits = 0
    let weightedSum = 0

    subjects.forEach((sub) => {
      const validGrade = getValidGrade(sub)
      if (validGrade !== null) {
        totalUnits += sub.units
        weightedSum += validGrade * sub.units
      }
    })

    return totalUnits > 0 ? (weightedSum / totalUnits).toFixed(2) : "N/A"
  }

  // ✅ CGPA should only include grades from *previous semesters*
  const calculateCGPA = (currentYear) => {
    let totalUnits = 0
    let weightedSum = 0

    grades.forEach((year) => {
      // stop including future semesters
      if (
        year.yearEnrolled < currentYear.yearEnrolled ||
        (year.yearEnrolled === currentYear.yearEnrolled &&
          year.semester <= currentYear.semester)
      ) {
        year.subjects.forEach((sub) => {
          const validGrade = getValidGrade(sub)
          if (validGrade !== null) {
            totalUnits += sub.units
            weightedSum += validGrade * sub.units
          }
        })
      }
    })

    return totalUnits > 0 ? (weightedSum / totalUnits).toFixed(2) : "N/A"
  }

  return (
    <div className="grades-page">
      {grades.length > 0 ? (
        grades.map((year, idx) => (
          <div key={idx} className="panel">
            <div className="panel-heading">
              <h3>
                {year.yearEnrolled} - {year.semester}
              </h3>
              <button
                className="grade-btn"
                onClick={() => setSelectedYear(year)}
              >
                View GPA | CGPA
              </button>
            </div>
            <div className="panel-body">
              <table>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Descriptive Title</th>
                    <th>Faculty Assigned</th>
                    <th>Units</th>
                    <th>Final</th>
                    <th>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {year.subjects.map((sub, sIdx) => (
                    <tr key={sIdx}>
                      <td>{sub.name}</td>
                      <td>{sub.description}</td>
                      <td>{sub.faculty.join(", ")}</td>
                      <td>{sub.units.toFixed(2)}</td>
                      <td
                        style={{
                          color:
                            sub.grade === "INC" ||
                            sub.grade === "DRP" ||
                            sub.grade === "5.00"
                              ? "red"
                              : "black",
                        }}
                      >
                        {sub.grade}
                      </td>
                      <td
                        style={{
                          color:
                            sub.compGrade !== "5.0" &&
                            !isNaN(parseFloat(sub.compGrade)) &&
                            sub.grade === "INC"
                              ? "green"
                              : "red",
                        }}
                      >
                        {sub.compGrade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <p>No Data yet available.</p>
      )}

      {selectedYear && (
        <div className="modal-overlay" onClick={() => setSelectedYear(null)}>
          <div
            className="modal-content glass-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>
              GPA & CGPA - {selectedYear.yearEnrolled} {selectedYear.semester}
            </h2>
            <p>
              <strong>GPA:</strong> {calculateGPA(selectedYear.subjects)}
            </p>
            <p>
              <strong>CGPA:</strong> {calculateCGPA(selectedYear)}
            </p>
            <button
              className="close-btn"
              onClick={() => setSelectedYear(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
