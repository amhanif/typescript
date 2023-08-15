"use strict";
let life = (age, name) => {
    console.log(`Mr. ${name}, your age is ${age}`);
    return (`Mr. ${name}, your age is ${age}`);
};
life(100, "Amir Hanif");
function optParams(params1, params2 = "Gama", params3 = 10) {
    console.log(`${params1}, ${params2}, ${params3}`);
    return `${params1}, ${params2}, ${params3}`;
}
let xyz = optParams(40, "Alfa", 50);
console.log(xyz);
let xyz2 = optParams(40, "Beta");
console.log(xyz2);
let xyz3 = optParams(40);
console.log(xyz3);
let xyz4 = optParams(40);
console.log(xyz4);
function optParams2(num1, num2) {
    console.log(num2);
}
optParams2();
optParams2(10);
optParams2(10, 20);
