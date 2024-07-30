

// console.log(myName.trim().length);

// goal is to make a method .truelength

// let Hero = ["thor", "spiderman"]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getspiderPower : function() {
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.aman = function (){
//     console.log(`present in all objects`);
// }

// console.log(Hero.aman());
let myName = "Aman    "
let another = "java script     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true legth is ${this.trim().length}`);
}

another.trueLength()
myName.trueLength()
"HIhello   ".trueLength()