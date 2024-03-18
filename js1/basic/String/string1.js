/* Topic String*/
//1.concate
const name="kundan"
const repoCount=50
//console.log(name+repoCount+"values") ==> Not ideal way modern way me koi bhi likhna pasand nhi karta
/* agar aaj ki date me use karna hain to aap Backticks(` `) use karsakte hain
Backticks==> That allows you to creat strings in java script*/
// Backticks use karne ka ye fayeda hain ki yha aata hain string interpoletion(mean ham banate hain place holders ushke andar jo bhi variable hain aap unme direct inject karsakte hain)
// it is denoted by ${}
// console.log(`My name is ${name} and my repo Count is ${repoCount}`);//${}-->this syntax is more readable & realible
// string ko  ham declare new key world se bhi karsakte hain:=>
//new keyworld use karte hain to aap object use karte hain javascript ke
const gameName=new String('kundan Rathore')
// console.log(gameName[0])
//prototype bhi access kar sakte hain
//  console.log(gameName.__proto__);
// yoc can find length=.length
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(7))
// console.log(gameName.indexOf('R'))
// console.log(gameName.trim())
const newString=gameName.substring(0,4)
//console.log(newString);
const anotherString=gameName.slice(-8,3)
// console.log(anotherString);
//trim method
const newStringOne="      Kundan Rathore     "
// console.log(newStringOne)
// console.log(newStringOne.trim());
const url="https://kundan.com/kundan%25Rathore"
// console.log(url.replace('25',450))
// console.log(url.includes('dvd'))
console.log(gameName.split('_'))