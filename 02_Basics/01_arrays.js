// array

const Myarr = [0, 1, 2, 3, 4, 5]
const hero=  ["a","f",'g']

const Myarr2 = new Array(1,2,3,4,5,5)

// console.log(Myarr[5]);

// console.log(Myarr[0]); // not associative arrays

// Array Methods

// Myarr.unshift(45) // (not optimized) insert at the start of array and all the other values get shifted
// Myarr.shift() // simillar to pop eliminates first value
// Myarr.pop() // eliminates last value


// ++++++++++++ Question answer type methods ++++++++==
// console.log(Myarr.includes(5)); // boolean return
// console.log(Myarr2.indexOf(4)); // index no. return 

// +++++++++++++++++++++++++++++++++++++++++

// const Newarr = Myarr.join()  // adds all element of array to string, array ko bind and string mai convert
// console.log(Newarr);

// slice, splice 

// console.log("A", Myarr)
// console.log(Myarr.slice(0,4)); // include 0 but not 4(no change to orriginal array)
// console.log("A", Myarr)
// console.log(Myarr.splice(0,4)) 
// console.log(Myarr); // spliced portion eliminated from original array
/*
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array ke andar array

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // concat 

const all_new_heros = [...Myarr, ...dc_heros] // spread

console.log(all_new_heros); // joins two arrays


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // depth is specified 
console.log(real_another_array);

*/
console.log(typeof(45));
console.log(Array.isArray(45)) // question asked wheather it is array or not
console.log(Array.from("777876758")) // number converted to array
console.log(Array.from({name:"abs"})) // interesting wheather to specify key ka array bnana hai ya value ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // make array of  value of variables

