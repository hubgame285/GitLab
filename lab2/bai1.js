const class1 = [
    {
        mssv: "PS0000",
        namme: "Nguyen Van A",
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: "pass",
    },
    {
        mssv: "PS0001",
        namme: "Nguyen Van B",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "pass",
    }
];

const class2 = [
    {
        mssv: "PS0002",
        namme: "Nguyen Van C",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "failed",
    },
    {
        mssv: "PS0003",
        namme: "Nguyen Van D",
        avgPoint: 10,
        avgTraningPoint: 10,
        status: "pass",
    },
    {
        mssv: "PS0004",
        namme: "Nguyen Van E",
        avgPoint: 10,
        avgTraningPoint: 2,
        status: "pass",
    }
];

//sap xep theo avgPoint tu cao xuong thap
const sortedByAvgPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("danh sach sinh vien sap tu cao xuong thap theo AvgPoint:");
console.log(sortedByAvgPoint);

//sap xep theo avgTraningPoint tu cao xuong thap
const sortByAvgTraningPoint = [...class1, ...class2].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
console.log("danh sach sinh vien sap tu cao xuong thap theo AvgTraningPoint:");
console.log(sortByAvgTraningPoint);

//tim sinh vien co dien AvgPoint và avgTraningPoint cao nhất
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
const maxAvgPointTraningStudent = allStudents.reduce((max, student) => (student.avgTraningPoint > max.avgTraningPoint ? student : max));

console.log("Sinh viên có avgPoint cao nhất: ", maxAvgPointStudent);
console.log("Sinh viên có avgTraningPoint cao nhất: ", maxAvgPointTraningStudent);
