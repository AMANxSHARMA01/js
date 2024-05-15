/*
let marks = "77abc"

console.log (typeof marks)

let valueInMarks = Number(marks) // String to Number

console.log (typeof valueInMarks)

console.log ( valueInMarks) // convert ho jaega but nan hai

// "33" => 33
// "33abc" => NaN
// true,false => 1,0

let isLoggedIn = "abc" // string to boolean

let boolianIsLoggedIn = Boolean(isLoggedIn)
console.log (boolianIsLoggedIn)

let num = 44
let StringNum = String(num)
console.log(typeof StringNum)
*/


// ********** Operations *************

let value = 4
let negValue = -value
console.log (negValue);
console.log("1" + 2 + 4) // agr string first to sbhi ko string mai treat
console.log (1 + 2 + "2") // agr string last mai to pehle wale ho jaenge fir string hoga

let gameCounter = 100
const newCount = gameCounter++
console.log(`gameCounter:${gameCounter}, newCount:${newCount}`)