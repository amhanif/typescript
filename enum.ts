//number enum type

/*const enum RollNumbers {
    Amir=1,
    Kashif,
    Nadeem,
    Asad,
    Kamran

}
let studentsList1: RollNumbers=RollNumbers.Kashif
let studentsList2: RollNumbers=RollNumbers.Amir
let studentsList3: RollNumbers=RollNumbers.Asad

console.log(studentsList1);
console.log(studentsList2);
console.log(studentsList3);*/

//sttring enum type

/*const enum StudentsDetails{
    name="Amir",
    Major="Programming"
}

let studenstName= StudentsDetails.name;
let studenstMajor= StudentsDetails.Major;
console.log(studenstName,studenstMajor)*/

//heterogenious enum type

const enum StudentsDetails{
    ID=1,
    name="Amir",
    Major="Programming"
}

let studenstID= StudentsDetails.ID;
let studenstName= StudentsDetails.name;
let studenstMajor= StudentsDetails.Major;

console.log(`${studenstID} - ${studenstName} has major in ${studenstMajor}`);






export{}