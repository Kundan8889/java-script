// ishe ... rest operator//spread operator kehte hain
// function calculatCartPrice(value1,value2,...num1){
//     return num1
// }
// console.log(calculatCartPrice(100,200,300));
const user={
    username:"kundan rathore",
    prices:199
}
function profile(anyobject){
   // console.log(`Username is ${anyobject.username} and price ${anyobject.price} .`);

}
// profile(user)
profile({
    username:"hansu",
    price:299
})
const mynewarray=[10,20,30,40]
function returSecondValue(getArray){
return getArray[0]
}
// console.log(returSecondValue(mynewarray))
console.log(returSecondValue([200,300,500]))
