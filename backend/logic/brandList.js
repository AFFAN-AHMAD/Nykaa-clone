
const brandList = (arr) => {
    
   let queryArr=arr.map((ele) => {
        return {brand:`${ele}`}
    })
    console.log(queryArr);
    return queryArr
}

module.exports = brandList