"use strict";
function greet(name) {
    console.log("Hello " + name.toUpperCase() + "!!");
}
greet("amir");
let func = (str) => str.toUpperCase();
let studentName = func("amir hanif");
console.log(studentName);
