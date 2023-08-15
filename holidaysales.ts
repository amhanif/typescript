function holidaySales(
    product:string,
    sales:number,
    tax:number,
    discount:number
):number{
    let price:number=0
    if (product==="sunglasses") price=29;
    if (product==="hat") price=19;
    if (product==="shoes") price=29
    let totalSalesForIndividualProduct:number=price*sales

    return(totalSalesForIndividualProduct-
        tax*totalSalesForIndividualProduct-
        discount*totalSalesForIndividualProduct);
    
}
console.log(holidaySales("sunglasses",20,.15,.25));


