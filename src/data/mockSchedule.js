// Mock student profile
export const mockStudent = {
  id: "2023-00123",
  name: "Sanji Vinsmoke",
  course: "BS Computer Science",
  yearLevel: "4th Year",
  department: "Department of Computing Science",
  college: "College of Information and Computing Sciences",
  academicStatus: {
    status: "Graduating",
    allowedUnits: 27,
    enrolledUnits: 12,
    remainingUnits: 0,
  },
  accountExpiration: "January 28, 2028",
};

// Mock enrolled subjects
export const mockEnrolledSubjects = [
  {
    ALIAS: "CCC101",
    DESCRIPTION: "Computer Programming 1",
    UNITS: 3,
    SECTION: "UuVv1",
    SCHEDULE: "M 8:30-10:00 W 8:30-10:00",
    ROOM: "Room 101",
    FACULTY: "Prof. Smith",
  },
  {
    ALIAS: "CCC100",
    DESCRIPTION: "Fundamentals of Computing",
    UNITS: 3,
    SECTION: "B",
    SCHEDULE: "M 10:30-13:00 W 10:00-11:30",
    ROOM: "Room 204",
    FACULTY: "Dr. Johnson",
  },
  {
    ALIAS: "HIST110",
    DESCRIPTION: "Philippine History",
    UNITS: 2,
    SECTION: "C",
    SCHEDULE: "F 13:00-15:00 S 13:00-15:00",
    ROOM: "Room 303",
    FACULTY: "Dr. Reyes",
  },
  {
    ALIAS: "IT202",
    DESCRIPTION: "Database Management Systems",
    UNITS: 3,
    SECTION: "D",
    SCHEDULE: "H 14:00-17:00",
    ROOM: "Room 410",
    FACULTY: "Engr. Tan",
  },
  {
    ALIAS: "ENG103",
    DESCRIPTION: "Technical Writing",
    UNITS: 3,
    SECTION: "E",
    SCHEDULE: "T 13:00-14:30",
    ROOM: "Room 120",
    FACULTY: "Prof. Santos",
  },
  {
    ALIAS: "NSTP001",
    DESCRIPTION: "CWTS 1",
    UNITS: 3,
    SECTION: "E",
    SCHEDULE: "A 5:00-8:00",
    ROOM: "Room 120",
    FACULTY: "Prof. Santos",
  },
];

export const mockGrades = [
  {
    yearEnrolled: "2022",
    semester: "2nd Semester",
    subjects: [
      {
        name: "IT201",
        description: "Database Systems",
        faculty: ["Prof. Enrique Lopez"],
        units: 4,
        grade: "2.00",
        compGrade: ""
      }
    ]
  },
  {
    yearEnrolled: "2023",
    semester: "1st Semester",
    subjects: [
      {
        name: "CS101",
        description: "Intro to Computer Science",
        faculty: ["Prof. Juan Dela Cruz"],
        units: 3,
        grade: "INC",
        compGrade: "1.75"
      },
      {
        name: "MATH101",
        description: "College Algebra",
        faculty: ["Prof. Maria Santos"],
        units: 3,
        grade: "INC",
        compGrade: "5.0"
      }
    ]
  }
];