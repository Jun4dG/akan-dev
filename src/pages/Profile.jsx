export default function Profile() {
  return (
    <section className="student-profile glass-card">
        <h3>Student Profile</h3>
        <p><strong>Course:</strong> {mockStudent.course}</p>
        <p><strong>Department:</strong> {mockStudent.department}</p>
        <p><strong>College:</strong> {mockStudent.college}</p>
        <p><strong>Status:</strong> {mockStudent.academicStatus.status}</p>
        <p>
          <strong>Units:</strong> {mockStudent.academicStatus.enrolledUnits}/
          {mockStudent.academicStatus.allowedUnits} (Remaining:{" "}
          {mockStudent.academicStatus.remainingUnits})
        </p>
        <p><strong>Account Expiration:</strong> {mockStudent.accountExpiration}</p>
      </section>
  );
}
