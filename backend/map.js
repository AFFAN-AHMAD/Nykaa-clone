



// let arr2 =  [ 'Kay Beauty', 'Earth Rhythm', 'nykaa cosmetics' ];
// let arr1 = [ 'lip balm', 'lip crayon' ,"lipstick"]
const createQueries = (arr1,arr2) => {
    const map = new Map;
    for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if (map.has(arr1[i])) {
            let temp = map.get(arr1[i]);
            temp.push(arr2[j])
            map.set(arr1[i],temp)
        } else {
              let temp = []
            temp.push(arr2[j])
            map.set(arr1[i],temp)
        }
    }
    }
    // console.log(map)
let newSArr = [];

for ([key,values] of map) {
    values.forEach((e) => {
        newSArr.push({ [key]: e })
    })
}
console.log(newSArr)
const queryArr = []
newSArr.map((ele) => {
    for (x in ele) {
        queryArr.push({ $and: [{ product_type: `${x}` }, { brand: `${ele[x]}` }] });
    }
   
})
    // console.log(queryArr[0]["$and"])
    return queryArr
}
// createQueries(arr1,arr2)

module.exports = createQueries

// console.log(map);
// for (let i = 0; i < queryArr.length; i++){
//     console.log(queryArr[i]['$and'])
// }
// console.log(queryArr)