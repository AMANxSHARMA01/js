// for of (iterator of object(chiz)) {objects are not iteratable}
const arr = [1,3,4,5,7]
for (const num of arr) {
    // console.log(num);
}
const greeting = "Hello world!"

for(const greet of greeting){
    // console.log(greet);
}

//Maps 

const map = new Map()
map.set('HMR',"Hamirpur")
map.set('SHM',"Shimla")
map.set('NDN',"Nadaun")

// console.log(map);

for (const [key,value] of map) {
    console.log(value);   
}

