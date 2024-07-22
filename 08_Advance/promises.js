const promiseOne = new Promise( function (resolve,reject){
    setTimeout(() => {
        console.log("Async Task is completed");
        resolve()
    }, 1000);
    
})

promiseOne.then(function () {
    console.log("Promise consumed");
})


new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve([12,22,52,33])
    },1000)
}).then(function(arr){
    console.log(arr[0]);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            
            resolve({UserName : 'Aman Sharma', password : '1982'})
            
        }else {
            reject("Something went wrong")
        }

    }, 1000);
}).then((user)=>{
    console.log(user);
    return user.UserName
}).then(function(UserName){
    console.log(UserName);
}).catch(function error(error) {
    console.log(error);
}).finally(function () {
    console.log('the promise is either resolved or rejected');
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"})
        }else {
            reject("Everything went wrong")
        }
    }, 1000);
})

async function consumeIt(){
   try {
    const response = await promiseThree                                         // directly cant handle errors
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumeIt()

fetch('https://api.github.com/users/arushijain')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err))