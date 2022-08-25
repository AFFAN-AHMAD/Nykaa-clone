
const permutation = (arr) => {
    const newArr =[]

const perm = (arr, index) => {
    if (index == arr.length) {
       
        newArr.push([...arr])
        return;
    }
    for (let i = index; i < arr.length; i++){
        swap(arr, i, index);
        perm(arr, index + 1);
        swap(arr, i, index);
    }

 
}

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
}
            perm(arr, 0)
    
           return newArr
}
// let arr = [1, 2, 3];

// console.log(newArr)
module.exports = permutation