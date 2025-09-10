import "../assets/styles/home.css";

const Notices = () => {
  return (
    <div className="glass-card">
      <h3>Daily Notices</h3>
      <ul>
        <li>
          <strong>Prelim payment due</strong><br />
          Please settle your dues before Friday.
        </li>
        <li>
          <strong>Exam schedule</strong><br />
          Midterms will start on October 15.
        </li>
      </ul>
    </div>
  );
};

export default Notices;
