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

// mock.js
export const tuitionRatePerUnit = 1000; // Example rate
export const miscellaneousFeePerSubject = 500; // Example fee

export const mockEnrolledSubjects = [
  {
    ALIAS: "CCC101",
    DESCRIPTION: "Computer Programming 1",
    UNITS: 3,
    SECTION: "UuVv1",
    SCHEDULE: "M 8:30-10:00 W 8:30-10:00",
    ROOM: "Room 101",
    FACULTY: "Prof. Smith",
    paymentStatus: "paid",
  },
  {
    ALIAS: "CCC100",
    DESCRIPTION: "Fundamentals of Computing",
    UNITS: 3,
    SECTION: "B",
    SCHEDULE: "M 10:30-13:00 W 10:00-11:30",
    ROOM: "Room 204",
    FACULTY: "Dr. Johnson",
    paymentStatus: "unpaid",
  },
  {
    ALIAS: "HIST110",
    DESCRIPTION: "Philippine History",
    UNITS: 2,
    SECTION: "C",
    SCHEDULE: "F 13:00-15:00 S 13:00-15:00",
    ROOM: "Room 303",
    FACULTY: "Dr. Reyes",
    paymentStatus: "paid",
  },
  {
    ALIAS: "IT202",
    DESCRIPTION: "Database Management Systems",
    UNITS: 3,
    SECTION: "D",
    SCHEDULE: "H 14:00-17:00",
    ROOM: "Room 410",
    FACULTY: "Engr. Tan",
    paymentStatus: "unpaid",
  },
  {
    ALIAS: "ENG103",
    DESCRIPTION: "Technical Writing",
    UNITS: 3,
    SECTION: "E",
    SCHEDULE: "T 13:00-14:30",
    ROOM: "Room 120",
    FACULTY: "Prof. Santos",
    paymentStatus: "paid",
  },
  {
    ALIAS: "NST001",
    DESCRIPTION: "CWTS 1",
    UNITS: 3,
    SECTION: "E",
    SCHEDULE: "A 5:00-8:00",
    ROOM: "Room 120",
    FACULTY: "Prof. Santos",
    paymentStatus: "unpaid",
  },
];

// Function to generate billing data from enrolled subjects
export const generateBillingData = (subjects) => {
  const billingItems = subjects.map((subject) => {
    const tuitionFee = subject.UNITS * tuitionRatePerUnit;
    const miscellaneousFee = miscellaneousFeePerSubject;
    const totalDue = tuitionFee + miscellaneousFee;
    const isPaid = subject.paymentStatus === "paid";
    const amountPaid = isPaid ? totalDue : 0;
    const balance = isPaid ? 0 : totalDue;

    return {
      item: subject.DESCRIPTION,
      amountDue: totalDue,
      amountPaid: amountPaid,
      balance: balance,
      course: subject.ALIAS,
      charged: isPaid ? "Yes" : "No",
    };
  });

  // Calculate totals for summary
  const totalDue = billingItems.reduce((sum, item) => sum + item.amountDue, 0);
  const totalPaid = billingItems.reduce((sum, item) => sum + item.amountPaid, 0);
  const totalBalance = billingItems.reduce((sum, item) => sum + item.balance, 0);

  return {
    billingItems,
    summary: {
      totalDue,
      totalPaid,
      balance: totalBalance,
    },
  };
};

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

export const mockEvaluationData = [
  {
    yearLevel: "1st Year",
    semester: "1st Semester",
    subjects: [
      { alias: "ENG101", description: "English Communication 1", units: 3, grade: "1.75", numTaken: 1 },
      { alias: "MATH101", description: "College Algebra", units: 3, grade: "5.0", numTaken: 2 },
      { alias: "PE101", description: "Physical Fitness", units: 2, grade: "1.25", numTaken: 1 },
    ],
  },
  {
    yearLevel: "2nd Year",
    semester: "2nd Semester",
    subjects: [
      { alias: "CS201", description: "Data Structures", units: 3, grade: "2.00", numTaken: 1 },
      { alias: "NSTP002", description: "CWTS 2", units: 3, grade: "1.50", numTaken: 1 },
    ],
  },
  {
    yearLevel: "3rd Year",
    semester: "1st Semester",
    subjects: [
      { alias: "IT301", description: "Operating Systems", units: 4, grade: "1.75", numTaken: 1 },
      { alias: "STAT101", description: "Probability and Statistics", units: 3, grade: "2.00", numTaken: 1 },
    ],
  },
];

// Composite groups (like electives, PE, NSTP)
export const mockComposites = [
  {
    category: "General Education Electives",
    required: 3,
    completed: 2,
    subjects: [
      { alias: "HIST101", description: "World History", units: 3, grade: "2.00", numTaken: 1 },
      { alias: "PSYCH101", description: "General Psychology", units: 3, grade: "1.75", numTaken: 1 },
    ],
  },
  {
    category: "PE",
    required: 8,
    completed: 2,
    subjects: [
      { alias: "PE101", description: "Physical Fitness", units: 2, grade: "1.25", numTaken: 1 },
      { alias: "PE102", description: "Rhythmic Activities", units: 2, grade: "1.50", numTaken: 1 },
    ],
  },
  {
    category: "NSTP",
    required: 2,
    completed: 1,
    subjects: [
      { alias: "NSTP001", description: "CWTS 1", units: 3, grade: "1.50", numTaken: 1 },
    ],
  },
];

// Mock data (replace with real props/data)
export const mockProfileData = {
  lastName: "Vinsmoke",
  firstName: "Sanji",
  middleName: "N/A",
  gender: "Male",
  civilStatus: "Single",
  religion: "Islam",
  tribe: "Maranao",
  nationality: "Filipino",
  birthday: "2003-06-04",
  birthplace: "Marawi City",
  fatherName: "Judge Vinsmoke",
  motherName: "Sora Vinsmoke",
  msusidNum: "202114453",
  course: "BS Computer Science",
  curriculum: "2018 Curriculum",
  yearLevel: "4th Year",
  adviser: "Prof. Mudzna Asakil",
  scholarship: "DOST",
  acadStatus: "Scholar",
  termAdmitted: "1st Semester",
  yearAdmitted: "2021",
  office365Username: "vinsmoke.sanji@s.msumain.edu.ph",
  office365Password: "supersecretpassword",
  addressStreet: "Purok ambot",
  addressCity: "Marawi",
  addressProv: "Lanao del Sur",
  campusAddress: "PBB House, MSU Main Campus",
  mobileNumber: "09123456789",
  emailAddress: "vinsmoke.gwapo@gmail.com",
  familyAnnualGrossIncome: 500000000000000,
  dateCreated: new Date(),
  expirationDate: "12/31/2025",
};