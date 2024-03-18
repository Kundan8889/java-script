// Arrays
// jaruri nhi ki same eliment ho eliment differense bhi ho sakte hain
const myArry=[0,1,2,3,4,5]
const myHeros=["kundan","aditi gupta"]
//jab bhi ishme koi value hame acesses karni hoti hain to ham:=> suear bracket ham lagate hain or fir ishki indexing ko ham dekhte hain
// array indexing start hoti hain zero se
// console.log(myArry[4]);
//ek or tarika hain array ko declare karne ka jese ki:=>
// const myArry2=new Array(1,2,3,4)//->yha par ham sqr[] bracket nhi use karte automatic ye sqr bracket de deta h
//array methods
// myArry.push(6) /*ye push() simple value ko add kardeta hain*/
// myArry.pop()/*pop me jo bhi last value hogi usko remove kardeta hain */ 
// myArry.unshift(8)/*ye first me insert hoti hain or baki ko aage shift kardet means first ko second or sec. ko 3rd par ye time consuming hain  but ishka use bhi chote term me kar sakte hain */
// myArry.shift() /* shift me jo first value hoti vo remove hojati hain */
/*  ab hme aese ques bhi puch sakte hain*/ 
// console.log(myArry.includes(9))
// console.log(myArry.indexOf(8))
// const newArray=myArry.join() 
// console.log(myArry)
// console.log(typeof newArray) //yha actually me type change huva hain 
/* slice or splice */
/*yha interve me ek qus puch jata hain ki slice or splice me diffrence btaiye */
// console.log("A",myArry);
//slice me jo limete di hain like 1se 3 to 1se equl or 3 se less
const myn1=myArry.slice(1,3)
console.log(myn1)
console.log("B",myArry);//this is orignal array
const myn2=myArry.splice(1,3)
console.log("C",myArry);//yha array hi chang hogaya hain, to yha slice ke andr jo arrya th jo portion tha vo nikal hi gaya hain pura or baki orignal array hi manupulate hogaya hain
// console.log(myn2)