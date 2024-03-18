//JavaScript "Immediately Invoked Function Expressions (IIFEs)"" are functions that are executed when they are initialized. 
//why we use IIFEs:=>gloabal socpe ke polution se problem hoti hain kai bar to us global socpe ke jo variables hain (jo bhi vha declaration hain uske polution ko hatane ke liye hamne IIFE ka use kiya)
(function MeraBhai(){
    //named IIFE
    console.log(`Mera bhai tu meri jaan hain`)
})();//yha end karne ke liye explicity semicolon laga padega
// (function bro(){
//     console.log(`big tarika`)
// })() 
( (name)=>{
     //unamed IIFE
    console.log(`big tarika ,${name}`)
})("kundan") 
