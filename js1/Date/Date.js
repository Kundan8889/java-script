//date 
let myDate=new Date()
// console.log(myDate.toString());
//practise:-
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// interview me pucha jata hain hain type
// console.log(typeof myDate);
//agar aapko new specific date hi declare karni to aese kar sakte hain
/*let myCreatedDate=new Date(2023,11,23)
console.log(myCreatedDate.toDateString()); 
//ham date ko or bhi tarike se declaye kar sakte hain
let myCreatedDate=new Date(2023,11,23,11,13)
console.log(myCreatedDate.toLocaleString()); */
//othe way
let myCreatedDate=new Date("12-20-2023") //--> yha par agar ham MM/DD/YYYY se  karte hain to 1 se month count hota hain
// console.log(myCreatedDate.toLocaleString());
// agar hame exact time ki value dekhna ho to ye hame bhot kam aayega :=>
let myTimeStamp= Date.now()
// console.log(myTimeStamp);  // output mili second me aayega bhai
// console.log(myCreatedDate.getTime());
// agar aap ko second me convert karna ho to ham vo bhi kar sakte hain
// console.log(Math.floor(Date.now()/1000)); 
let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
//ye jo aap defind karte hain vo ek object defind karte hain hain or bhot sare parameters ham defind kar sakte hain jese ki :=>
newDate.toLocaleString('default',{
 weekday: "long"
}
);
//ish tarah se ham customize kar sakte hain 