const NewString = new String('All eyes on them')
let oldString = (`All eyes on me and ${NewString}`)

/*
console.log(typeof(NewString));
console.log(oldString);
console.log(oldString.__proto__);
*/

// Methods in string //

console.log(oldString.toUpperCase());
console.log(oldString.substring(0,7));
console.log(oldString.replaceAll("All",'Crib'));

console.log(oldString.search(/[A-Z]/)) // returning the index of the first match in the string.

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

console.log(oldString.slice(-3));

