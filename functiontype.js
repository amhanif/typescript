"use strict";
function dayEndSales(product, sales, tax, discount) {
    let price = 0;
    if (product === "sunglasses")
        price = 29;
    if (product === "hats")
        price = 19;
    if (product === "shoes")
        price = 59;
    let totalDayEndSalesofIndividualProduct = price * sales;
    return (totalDayEndSalesofIndividualProduct -
        tax * totalDayEndSalesofIndividualProduct -
        discount * totalDayEndSalesofIndividualProduct);
}
const sunglasses = dayEndSales("sunglasses", 20, 0.15, 0.25);
const hats = dayEndSales("hats", 50, 0.25, 0.20);
const shoes = dayEndSales("shoes", 30, 0.10, 0.40);
console.log(`Total Day End Sales from Sunglasses is $${sunglasses}`);
console.log(`Total Day End Sales from Hats is $${hats}`);
console.log(`Total Day End Sales from Shoes is $${shoes}`);
