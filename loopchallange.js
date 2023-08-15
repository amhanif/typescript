"use strict";
let searchHistory = [
    'How to make money online',
    'benefits of eating garlic',
    'html CSS tutorials',
    'tips for a successful life'
];
/*for (let searchItem of searchHistory){
        searchItem.split("  ")
    for(let entry of searchItem){
        if (entry===`html` || entry===`CSS`)
 console.log("Are you ready to learn HTML & CSS")
}
}*/
searchHistory.map((entry) => {
    if (entry.includes("html") || entry.includes("CSS"))
        console.log("Do you want to learn programming");
});
