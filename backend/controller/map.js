



// let arrOfProducts = [ 'lip balm', 'lipstick']
// let arrOfBrands =  [ 'Kay Beauty', 'Earth Rhythm', 'nykaa cosmetics' ];
const createQueries = (arrOfProducts,arrOfBrands) => {
	const map = new Map();
	for (let i = 0; i < arrOfProducts.length; i++) {
		for (let j = 0; j < arrOfBrands.length; j++) {
			if (map.has(arrOfProducts[i])) {
				let temp = map.get(arrOfProducts[i]);
				temp.push(arrOfBrands[j]);
				map.set(arrOfProducts[i], temp);
			} else {
				let temp = [];
				temp.push(arrOfBrands[j]);
				map.set(arrOfProducts[i], temp);
			}
		}
	}
	// console.log(map)
	let combinationsArray = [];

	for ([key, values] of map) {
		values.forEach((e) => {
			combinationsArray.push({ [key]: e });
		});
	}
	// console.log(combinationsArray)


	const queryArr = [];
	combinationsArray.map((ele) => {
		for (x in ele) {
			queryArr.push({
				$and: [{ product_type: `${x}` }, { brand: `${ele[x]}` }],
			});
		}
	});

	
	// for (let i = 0; i < queryArr.length; i++){
	//     console.log(queryArr[i]['$and'])
	// }
	// console.log(queryArr)
	// console.log(queryArr[0]["$and"]);
	return queryArr;
}
// createQueries(arrOfProducts,arrOfBrands)

module.exports =createQueries
		// console.log(map);
		// for (let i = 0; i < queryArr.length; i++){
		//     console.log(queryArr[i]['$and'])
		// }
		// console.log(queryArr)







