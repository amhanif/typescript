"use strict";
const poem = Math.random() > 0.5
    ? { name: "The Great", pages: 7 }
    : { name: "The Prince", rhymes: true };
if ("pages" in poem) {
    poem.pages;
}
else {
    poem.rhymes;
}
console.log(poem);
