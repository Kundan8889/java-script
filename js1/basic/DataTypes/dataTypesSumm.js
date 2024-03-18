// primitive data type
/*
7 types of primitive data type(ye jitne bhi primitive data type hain ye call by value hote hain)
1]-->String 
2]-->Number
3]-->Boolean
4]-->null(Empty)
5]-->undefined
6]-->Symbol(kisi bhi value ko unique banane ke liye use hota hain)
7]-->BigInt(BigInt ka use bhut badi values ko handle karne ke liye use kiya jata hain)
*/
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //ya -->let useEmail= undefined; ek ki baat hain
const id = Symbol("123"); //both are unique not same
//Symbol-->yha symbol ka kaam hi yhi hain agar ham values bhi same pass karenge(like=> id or anotherId) to bhi values same nhi hogi
const anotherId = Symbol("123");
//let cheak
console.log(id === anotherId); //false
//BigInt
const BigNumber = 43457238724376438793746474938965n;
//reference data type(Non primitive)
//====>Note:-java script dynamic type language hain
/*
1]-->Arrays
2]-->Object
Note:- Agar aapko javaScript master karni hain to aap javaScript ke Objects master karlijiye or java ke jo browsers ke jo web event hote hain  ya browser event hain ye 2 topic  master karliye  aap javaScript ke master banjayenge
3]-->Functions
*/
const heros = ["saktiman", "MotuPatlu", "Doremon", "Balveer"];
/* {
//   name: "kundan" ,
//   age: 22 ,
 } */
//ishko ham kisi variables me bhi store kar sakte hain like:
let myObj = {
  name: "kundan",
  age: 22,
};
console.log(typeof myObj);
//Basic function
const myFunction = function () {
  console.log("Hello Kundan");
};
// Note:--> data type pta karne ke kiye "typeOf" use karke kisi bhi variables ka data type pta kar sakte hain
console.log(typeof myFunction);
/* 
==> Stack(primitive)-->jitne bhi aapke primitive data types hain like numbers,boolean ye sab jate hain stack ke andar or "stack ke andar jab bhi ham koi values lenge to ushka hame copy hi milta hain"
==>Heap(Non primitive)-->lekin heap ke andar koi values rakhte hain to aapko ushka reference  milta hain means actual me ham koi bhi change karte hain vo original values ke andar hi karte hain
*/
//Stack(primitive):
let myYoutubeName = "Kundan Rathore";
let anotherName = myYoutubeName;
anotherName = "Kundan@123_Rathore";
console.log(myYoutubeName);
console.log(anotherName);
//Heap(Non primitive):
let userOne={
    email:"kundanrathore450@gmail.com",
    upi:"8889@ybl"
}
let userTwo = userOne;
userTwo.email="kundanrathore250@gmail.com" ,
console.log(userOne.email);
console.log(userTwo.email);
