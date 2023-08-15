
console.log("Hello World")
alert("Hello");


let person=new Map();
person.set('name1', 'amir1');
person.set('name2', 'amir2');
person.set('name3', 'amir3');
person.set('name4', 'amir4');

console.log(person.get('name1'));
console.log(person.has('name1'));
console.log(person.keys());
console.log(person.values());

person.forEach(function(person){
    console.log(person);
})