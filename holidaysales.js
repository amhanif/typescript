"use strict";
function holidaySales(product, sales, tax, discount) {
    let price = 0;
    if (product === "sunglasses")
        price = 29;
    if (product === "hat")
        price = 19;
    if (product === "shoes")
        price = 29;
    let totalSalesForIndividualProduct = price * sales;
    return (totalSalesForIndividualProduct -
        tax * totalSalesForIndividualProduct -
        discount * totalSalesForIndividualProduct);
}
console.log(holidaySales("sunglasses", 20, .15, .25));
