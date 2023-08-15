let myObj={
    "age":15,
    "name":"Myobject",
    "isOjb":true,

    generateRandomNumber: function(from:number, to:number){
        let x= 2*Math.random()*10;
        return x;

    },
    printAge: function (myAge:number){
        console.log(myAge);
        
        
        
    }
}
console.log(myObj.generateRandomNumber(4,8));



console.log(myObj);

console.log(myObj.age);
console.log(myObj.name);
console.log(myObj.isOjb);

