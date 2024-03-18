//for of 
// const numArray=[2,4,6,8,10]
// for (const num of numArray) {
//     console.log(`Each char is ${num}`)
// }
// const arr="Hello Kundan"
// for (const num of arr) {
//     console.log(`Each char is ${num}`)
// }
//Maps=:uniq values ke liye jane jate hai
const map=new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('UK',"United Kingdom")
//console.log(map)
for (const [key,value] of map) {
    console.log(key,':-',value)
}