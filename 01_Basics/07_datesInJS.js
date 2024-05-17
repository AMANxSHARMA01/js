// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

let myCreatedDate = new Date("2002-09-20")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // milliseconds
// console.log(Math.floor(Date.now()/1000)); // in seconds

console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getMonth() + 1);

console.log(myCreatedDate.toLocaleString('default', {
    weekday : "long",
})
)
