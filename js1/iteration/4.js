const myObject={
    js:"javascript",
    java:"Java",
    cpp:"c++",
    rb:"ruby"
}
// for (const key of myObject) {
//     console.log(key)// error:myObject  is not iterable 
// }
//ishke liye for-in loop lagayenge
// for (const key in myObject) {
//     console.log(`${key}  shortcut iS  for ${myObject[key]}`)
// }
const programming=["js","rb","java","DSA","Cpp"]
for (const key in programming) {
    console.log(programming[key])
}