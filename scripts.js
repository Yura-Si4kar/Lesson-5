"use strict";

const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ],
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ],
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ],
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ],
    },
];

const foundId = students.filter(isFound);
const marksScores = foundId.map(getMarks);
const scoresTotal = marksScores.reduce(addScores, 0);
const averageGroupMark = scoresTotal / marksScores.length;

function isFound(item) {
    return item.name;
};

function getMarks(item) {
    return item.marks;
}

function averageStudentMark() {
    
}

function addScores(val, marks) {
    return val + marks;
}

console.log("Average marks:", averageStudentMark(students[2]));
console.log("Average group marks:", averageGroupMark);