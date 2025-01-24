// server.js
const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
app.use(cors());


// Dummy data
//2
  const RegularClassListData = {
    input: {
      sessionId: "session12345",
      isRegular: true,
    },
    output:[
      // CS Department
      { classId: "class001", className: "BE Regular 1st year CS A", year: 1, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 0 },
      { classId: "class002", className: "BE Regular 1st year CS B", year: 1, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 1 },
      { classId: "class003", className: "BE Regular 2nd year CS A", year: 2, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 2 },
      { classId: "class004", className: "BE Regular 2nd year CS B", year: 2, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 3 },
      { classId: "class005", className: "BE Regular 3rd year CS A", year: 3, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 0 },
      { classId: "class006", className: "BE Regular 3rd year CS B", year: 3, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 1 },
      { classId: "class007", className: "BE Regular 4th year CS A", year: 4, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 2 },
      { classId: "class008", className: "BE Regular 4th year CS B", year: 4, deptId: "dept001", deptName: "CS", courseId: "course001", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 3 },
    
      // IT Department
      { classId: "class009", className: "BE Regular 1st year IT A", year: 1, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 0 },
      { classId: "class010", className: "BE Regular 1st year IT B", year: 1, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 1 },
      { classId: "class011", className: "BE Regular 2nd year IT A", year: 2, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 2 },
      { classId: "class012", className: "BE Regular 2nd year IT B", year: 2, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 3 },
      { classId: "class013", className: "BE Regular 3rd year IT A", year: 3, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 0 },
      { classId: "class014", className: "BE Regular 3rd year IT B", year: 3, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 1 },
      { classId: "class015", className: "BE Regular 4th year IT A", year: 4, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 2 },
      { classId: "class016", className: "BE Regular 4th year IT B", year: 4, deptId: "dept002", deptName: "IT", courseId: "course002", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 3 },
    
      // ETC Department
      { classId: "class017", className: "BE Regular 1st year ETC A", year: 1, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 0 },
      { classId: "class018", className: "BE Regular 1st year ETC B", year: 1, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 1 },
      { classId: "class019", className: "BE Regular 2nd year ETC A", year: 2, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 2 },
      { classId: "class020", className: "BE Regular 2nd year ETC B", year: 2, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 3 },
      { classId: "class021", className: "BE Regular 3rd year ETC A", year: 3, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 0 },
      { classId: "class022", className: "BE Regular 3rd year ETC B", year: 3, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 1 },
      { classId: "class023", className: "BE Regular 4th year ETC A", year: 4, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 2 },
      { classId: "class024", className: "BE Regular 4th year ETC B", year: 4, deptId: "dept003", deptName: "ETC", courseId: "course003", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 3 },
    
      // EI Department
      { classId: "class025", className: "BE Regular 1st year EI A", year: 1, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 0 },
      { classId: "class026", className: "BE Regular 1st year EI B", year: 1, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 1 },
      { classId: "class027", className: "BE Regular 2nd year EI A", year: 2, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 2 },
      { classId: "class028", className: "BE Regular 2nd year EI B", year: 2, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 3 },
      { classId: "class029", className: "BE Regular 3rd year EI A", year: 3, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 0 },
      { classId: "class030", className: "BE Regular 3rd year EI B", year: 3, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 1 },
      { classId: "class031", className: "BE Regular 4th year EI A", year: 4, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 2 },
      { classId: "class032", className: "BE Regular 4th year EI B", year: 4, deptId: "dept004", deptName: "EI", courseId: "course004", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 3 },
    
      // ME Department
      { classId: "class033", className: "BE Regular 1st year ME A", year: 1, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 0 },
      { classId: "class034", className: "BE Regular 1st year ME B", year: 1, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 1 },
      { classId: "class035", className: "BE Regular 2nd year ME A", year: 2, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 2 },
      { classId: "class036", className: "BE Regular 2nd year ME B", year: 2, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "internship", section: "B", allocationStatus: 3 },
      { classId: "class037", className: "BE Regular 3rd year ME A", year: 3, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 0 },
      { classId: "class038", className: "BE Regular 3rd year ME B", year: 3, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "part time", section: "B", allocationStatus: 1 },
      { classId: "class039", className: "BE Regular 4th year ME A", year: 4, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 2 },
      { classId: "class040", className: "BE Regular 4th year ME B", year: 4, deptId: "dept005", deptName: "ME", courseId: "course005", courseName: "BE", courseType: "full time", section: "B", allocationStatus: 3 },
    
      // CIVIL Department
      { classId: "class041", className: "BE Regular 1st year CIVIL A", year: 1, deptId: "dept006", deptName: "CIVIL", courseId: "course006", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 0 },
      { classId: "class043", className: "BE Regular 2nd year CIVIL A", year: 2, deptId: "dept006", deptName: "CIVIL", courseId: "course006", courseName: "BE", courseType: "internship", section: "A", allocationStatus: 2 },
      { classId: "class045", className: "BE Regular 3rd year CIVIL A", year: 3, deptId: "dept006", deptName: "CIVIL", courseId: "course006", courseName: "BE", courseType: "part time", section: "A", allocationStatus: 0 },
      { classId: "class047", className: "BE Regular 4th year CIVIL A", year: 4, deptId: "dept006", deptName: "CIVIL", courseId: "course006", courseName: "BE", courseType: "full time", section: "A", allocationStatus: 2 },
    ],  
  };

  //4
  const RegularClassData = {
    input: {
      classId: "class001",
      sessionId: "session12345",
    },
    output: {
      classId: "class001",
      className: "BE Regular 3rd year CS B",
      subjectCategoryId: "category001",
      subjectList: [
        {
          subcode: "CS301",
          subjectName: "Data Structures",
          facultyList: [
            {
              facultyId: "faculty001",
              facultyName: "Dr. Alice Johnson",
              facultyAllocationStatus: "unlocked",
            },
            {
              facultyId: "faculty002",
              facultyName: "Dr. Bob Smith",
              facultyAllocationStatus: "locked",
            },
          ],
        },
        {
          subcode: "CS302",
          subjectName: "Algorithms",
          facultyList: [
            {
              facultyId: "faculty003",
              facultyName: "Dr. Carol White",
              facultyAllocationStatus: "unlocked",
            },
            {
              facultyId: "faculty004",
              facultyName: "Dr. Dave Brown",
              facultyAllocationStatus: "locked",
            },
          ],
        },
        {
          subcode: "CS303",
          subjectName: "Database Management Systems",
          facultyList: [
            {
              facultyId: "faculty005",
              facultyName: "Dr. Eve Green",
              facultyAllocationStatus: "unlocked",
            },
            {
              facultyId: "faculty006",
              facultyName: "Dr. Frank Black",
              facultyAllocationStatus: "locked",
            },
          ],
        },
        {
          subcode: "CS304",
          subjectName: "Software Engineering",
          facultyList: [
            {
              facultyId: "faculty007",
              facultyName: "Dr. Grace Lee",
              facultyAllocationStatus: "unlocked",
            },
            {
              facultyId: "faculty008",
              facultyName: "Dr. Hank Gray",
              facultyAllocationStatus: "locked",
            },
          ],
        },
        {
          subcode: "CS305",
          subjectName: "Artificial Intelligence",
          facultyList: [
            {
              facultyId: "faculty009",
              facultyName: "Dr. Irene Blue",
              facultyAllocationStatus: "unlocked",
            },
            {
              facultyId: "faculty010",
              facultyName: "Dr. Jack White",
              facultyAllocationStatus: "locked",
            },
          ],
        },
      ],
      history: [
        {
          subcode: "CS301",
          subjectName: "Data Structures",
          historyFacultyList: [
            {
              facultyId: "faculty011",
              facultyName: "Dr. Kevin Brown",
            },
            {
              facultyId: "faculty012",
              facultyName: "Dr. Laura Black",
            },
          ],
        },
        {
          subcode: "CS302",
          subjectName: "Algorithms",
          historyFacultyList: [
            {
              facultyId: "faculty013",
              facultyName: "Dr. Mike Green",
            },
            {
              facultyId: "faculty014",
              facultyName: "Dr. Nancy White",
            },
          ],
        },
        {
          subcode: "CS303",
          subjectName: "Database Management Systems",
          historyFacultyList: [
            {
              facultyId: "faculty015",
              facultyName: "Dr. Oliver Smith",
            },
            {
              facultyId: "faculty016",
              facultyName: "Dr. Paula Black",
            },
          ],
        },
        {
          subcode: "CS304",
          subjectName: "Software Engineering",
          historyFacultyList: [
            {
              facultyId: "faculty017",
              facultyName: "Dr. Quentin Green",
            },
            {
              facultyId: "faculty018",
              facultyName: "Dr. Rachel White",
            },
          ],
        },
        {
          subcode: "CS305",
          subjectName: "Artificial Intelligence",
          historyFacultyList: [
            {
              facultyId: "faculty019",
              facultyName: "Dr. Sam Blue",
            },
            {
              facultyId: "faculty020",
              facultyName: "Dr. Tina Gray",
            },
          ],
        },
      ],
    },
  };

  //3
  const ExClassListData = {
    input: {
      sessionId: "session67890",
      isRegular: false,
    },
    output: [
      {
        classId: "1001",
        year: 1,
        courseId: "C001",
        courseName: "BE",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S101",
            subjectCode: "DB101",
            subjectName: "Introduction to DBMS",
            className: "DB101 Introduction to DBMS Theory",
            subjectCategoryId: 1,
            allocationStatus: 0
          }
        ]
      },
      {
        classId: "1002",
        year: 2,
        courseId: "C001",
        courseName: "BE",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S102",
            subjectCode: "OOP101",
            subjectName: "Object-Oriented Programming",
            className: "OOP101 Object-Oriented Programming Lab",
            subjectCategoryId: 0,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1003",
        year: 3,
        courseId: "C002",
        courseName: "BE",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S103",
            subjectCode: "DS102",
            subjectName: "Data Structures",
            className: "DS102 Data Structures Theory",
            subjectCategoryId: 1,
            allocationStatus: 2
          }
        ]
      },
      {
        classId: "1004",
        year: 4,
        courseId: "C002",
        courseName: "BE",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S104",
            subjectCode: "AI104",
            subjectName: "Artificial Intelligence",
            className: "AI104 Artificial Intelligence Lab",
            subjectCategoryId: 0,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1005",
        year: 1,
        courseId: "C003",
        courseName: "ME",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S105",
            subjectCode: "ML105",
            subjectName: "Machine Learning",
            className: "ML105 Machine Learning Theory",
            subjectCategoryId: 1,
            allocationStatus: 0
          }
        ]
      },
      {
        classId: "1006",
        year: 2,
        courseId: "C003",
        courseName: "ME",
        courseType: "full time",
        listOfSubjects: [
          {
            subjectId: "S106",
            subjectCode: "SE106",
            subjectName: "Software Engineering",
            className: "SE106 Software Engineering Lab",
            subjectCategoryId: 0,
            allocationStatus: 2
          }
        ]
      },
      {
        classId: "1007",
        year: 3,
        courseId: "C001",
        courseName: "BE",
        courseType: "part time",
        listOfSubjects: [
          {
            subjectId: "S107",
            subjectCode: "CN107",
            subjectName: "Computer Networks",
            className: "CN107 Computer Networks Theory",
            subjectCategoryId: 1,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1008",
        year: 4,
        courseId: "C001",
        courseName: "BE",
        courseType: "part time",
        listOfSubjects: [
          {
            subjectId: "S108",
            subjectCode: "WD108",
            subjectName: "Web Development",
            className: "WD108 Web Development Lab",
            subjectCategoryId: 0,
            allocationStatus: 0
          }
        ]
      },
      {
        classId: "1009",
        year: 1,
        courseId: "C002",
        courseName: "ME",
        courseType: "part time",
        listOfSubjects: [
          {
            subjectId: "S109",
            subjectCode: "CC109",
            subjectName: "Cloud Computing",
            className: "CC109 Cloud Computing Theory",
            subjectCategoryId: 1,
            allocationStatus: 2
          }
        ]
      },
      {
        classId: "1010",
        year: 2,
        courseId: "C002",
        courseName: "ME",
        courseType: "part time",
        listOfSubjects: [
          {
            subjectId: "S110",
            subjectCode: "DA110",
            subjectName: "Data Analytics",
            className: "DA110 Data Analytics Lab",
            subjectCategoryId: 0,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1011",
        year: 3,
        courseId: "C003",
        courseName: "ME",
        courseType: "part time",
        listOfSubjects: [
          {
            subjectId: "S111",
            subjectCode: "DL111",
            subjectName: "Deep Learning",
            className: "DL111 Deep Learning Theory",
            subjectCategoryId: 1,
            allocationStatus: 0
          }
        ]
      },
      {
        classId: "1012",
        year: 4,
        courseId: "C003",
        courseName: "ME",
        courseType: "internship",
        listOfSubjects: [
          {
            subjectId: "S112",
            subjectCode: "BD112",
            subjectName: "Big Data",
            className: "BD112 Big Data Lab",
            subjectCategoryId: 0,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1013",
        year: 1,
        courseId: "C001",
        courseName: "BE",
        courseType: "internship",
        listOfSubjects: [
          {
            subjectId: "S113",
            subjectCode: "IoT113",
            subjectName: "Internet of Things",
            className: "IoT113 IoT Theory",
            subjectCategoryId: 1,
            allocationStatus: 2
          }
        ]
      },
      {
        classId: "1014",
        year: 2,
        courseId: "C001",
        courseName: "BE",
        courseType: "internship",
        listOfSubjects: [
          {
            subjectId: "S114",
            subjectCode: "RS114",
            subjectName: "Robotic Systems",
            className: "RS114 Robotic Systems Lab",
            subjectCategoryId: 0,
            allocationStatus: 0
          }
        ]
      },
      {
        classId: "1015",
        year: 3,
        courseId: "C002",
        courseName: "ME",
        courseType: "internship",
        listOfSubjects: [
          {
            subjectId: "S115",
            subjectCode: "AR115",
            subjectName: "Augmented Reality",
            className: "AR115 Augmented Reality Theory",
            subjectCategoryId: 1,
            allocationStatus: 1
          }
        ]
      },
      {
        classId: "1016",
        year: 4,
        courseId: "C002",
        courseName: "ME",
        courseType: "internship",
        listOfSubjects: [
          {
            subjectId: "S116",
            subjectCode: "VR116",
            subjectName: "Virtual Reality",
            className: "VR116 Virtual Reality Lab",
            subjectCategoryId: 0,
            allocationStatus: 0
          }
        ]
      }
    ],
  };
  
  
     
// Route to get all students
app.get('/api/RegularClassList', (req, res) => {
    res.json(RegularClassListData.output);
});

// Route to get a specific student by ID
app.get('/api/RegularClassList/RegularFacultyAllocation', (req, res) => {
    res.json(RegularClassData.output);
});

app.get('/api/ExClassList', (req, res) => {
    res.json(ExClassListData.output);
});

app.get('/api/ExClassList/ExFacultyAllocation', (req, res) => {
    res.json(ExClassListData.output);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

