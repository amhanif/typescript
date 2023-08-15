"use strict";
let myObj = {
    "age": 15,
    "name": "Myobject",
    "isOjb": true,
    generateRandomNumber: function (from, to) {
        let x = 2 * Math.random() * 10;
        return x;
    },
    printAge: function (myAge) {
        console.log(myAge);
    }
};
console.log(myObj.generateRandomNumber(4, 8));
console.log(myObj);
console.log(myObj.age);
console.log(myObj.name);
console.log(myObj.isOjb);
