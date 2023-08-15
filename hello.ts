function greet(name:string){
    console.log("Hello " + name.toUpperCase()+ "!!")
}
greet("amir")

let func=(str:string):string=> str.toUpperCase()
let studentName=func("amir hanif")
console.log(studentName);
