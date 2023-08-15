
let studentData:string[]=["Amir","Imran","Irfan","Kamran","Adnan"];
let studentNumber:number[]=[1,2,3,4,5,6];

let combined=[...studentData, ...studentNumber];
console.log(combined);

function asadNames(greeting:string, ...nickNames:string[]) {
    for(const nickName of nickNames){
        console.log(`${greeting} ${nickName}`);
}
}
asadNames("Hello", "Asad","bachlor","Motay","Donkey")

