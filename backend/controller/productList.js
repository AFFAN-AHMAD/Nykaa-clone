// this can be part of manager but not controller, irrelevant peice of code
// let arr1 = ['lip balm', 'lip crayon', "lipstick"];

const productList = (arr) => {
    
   let queryArr=arr.map((ele) => {
        return {product_type:`${ele}`}
    })
    console.log(queryArr);
    return queryArr
}

// productList()
module.exports = productList