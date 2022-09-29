// this can be part of manager but not controller, irrelevant peice of code
const brandList = (arr) => {
    
   let queryArr=arr.map((ele) => {
        return {brand:`${ele}`}
    })
    console.log(queryArr);
    return queryArr
}

module.exports = brandList