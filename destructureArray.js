const students = ["lars","helen","bob"];

const [firstStudent, ...others] = students;

// console.log("firstStudent", firstStudent);
// console.log("others", others);
console.log(students)

const printFirstStudent = ([firstStudent, secondStudent, ...others]) => {
    console.log("firstStudent", firstStudent)
    console.log("secondStudent", secondStudent)
    console.log("others", others)
}

// printFirstStudent(students)