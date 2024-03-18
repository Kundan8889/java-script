const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
// console.log(marvel_heros);//yha arrays ko bhi as a single data le leta hain
// console.log(marvel_heros[3][1]);
// const allHeros=marvel_heros.concat(dc_heros)//concat jo return karta hain new arrays
// console.log(allHeros)
const all_New_Heros=[...marvel_heros,...dc_heros]//splite hogi means ek ek values hi aayegi //preferd people this
console.log(all_New_Heros);
const another_array=[1,2,3,[4,5,6],7,[9,10,11,[12,23,34]]]//yha single aaray me convert kardeta hain flate
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
//check karna ho to==>
console.log(Array.isArray("kundan"))
console.log(Array.from("kundan"))//array banadega
console.log(Array.from({name:"kundan"}))//yha btana padega ki me keys ka aaray banu ya values ka yha ==>bhut hi intresting case hain interviews ke liye<==
let score1=200
let score2=400
let score3=600
console.log(Array.of(score1,score2,score3))//yha dot of lagane se sare ko convert kar sakte hain bro


