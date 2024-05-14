const accountId = 1234
let accEmail = "abc@gmail.com"
var accCity = "Shimla" // Do not use var, Issue of block scope and functional scope

/*

console.table([accountId,accEmail,accCity])

*/

accEmail = "baba@yahoo.com"

console.table([accountId,accEmail,accCity])