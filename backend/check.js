    const querArr =[
    {$and: [{ product_type: "lip balm"}, { brand: "Kay Beauty" }]},
  '$and:[{ product_type: lip balm}, { brand: Earth Rhythm }]',
  '$and:[{ product_type: lip balm}, { brand: nykaa cosmetics }]',
  '$and:[{ product_type: lip crayon}, { brand: Kay Beauty }]',
  '$and:[{ product_type: lip crayon}, { brand: Earth Rhythm }]',
  '$and:[{ product_type: lip crayon}, { brand: nykaa cosmetics }]',
  '$and:[{ product_type: lip sticks}, { brand: Kay Beauty }]',
  '$and:[{ product_type: lip sticks}, { brand: Earth Rhythm }]',
  '$and:[{ product_type: lip sticks}, { brand: nykaa cosmetics }]'
    ]   
    
    const newQueryArr = querArr.map((ele) => {
        return ele.split('$')
    })
    console.log(newQueryArr)