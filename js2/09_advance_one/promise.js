// const promiseOne=new Promise(function(resolve,reject){
//     // do an async task
//     // db calls,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 solved");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"kundan",email:"kundanrathore250@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "kundan", email: "kundanrathore250@gmail.com" });
//         }
//         else {
//             reject("Error:something went wrong")
//         }
//     }, 1000)
// })
// promiseFour
// .then(function (user) {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username)
// })
// .catch((function (error) {
//     console.log(error);
// })).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "kundan", email: "kundanrathore250@gmail.com" });
        }
        else {
            reject("Error:something went wrong")
        }
    }, 1000)
});
// async function consumePromiseFive(){
//     const response=await promiseFive
//     console.log(response);
// }

//or
// async function consumePromiseFive(){
//     try{
//     const response=await promiseFive
//     console.log(response);
//     }catch(error){
//         console.log(error)
//     }

// }
// consumePromiseFive();

// async function getAllUsers() {
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     const data=await response.json()
//     console.log(data);
//    }
//    catch(error){
// console.log("E:",error)
//    }
// }
// getAllUsers() 

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>console.log(error));