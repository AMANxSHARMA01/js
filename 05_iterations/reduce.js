 ///////////////////map/////////////////////
 
 const lala = [1,2,4,5,7,8]

 const sasa = lala
 .map( (num) => num + 33)
 .map ( (num) => num - 5)
 .filter( (num) => num >=33)
//  console.log(sasa);

/////////////////////reduce//////////////////

const dada = lala.reduce( (acc,curr) => {
    // console.log(`acc: ${acc} and currvalue: ${curr}`);
    return acc + curr
    
},2)
// console.log(dada);

////////////////////shopping cart //////////////////

const shop = [
    {
        item : "lala",
        price : 99
    },
    {
        item : "kaka",
        price : 66
    },
    {
        item : "papa",
        price : 999
    },
    {
        item : "olaa",
        price : 99
    },
]

const pesa = shop.reduce( (acc,item) => {return acc + item.price},0)
console.log(pesa);