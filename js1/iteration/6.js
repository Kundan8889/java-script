//basic filter
//const myNums=[1,2,3,4,5,6,7,8,9,10]
//jab bhi hm filter use karte hain to filter ke andr aapko ek call back fn milega jiske andr hr value ko each acsess (filter(num))kiya jayega  uske baad aapko condition deni pdegi jo condition ko satisfi karege only vhi values return ki jayegi
//Method:1
// const newNums=myNums.filter((num)=>num>5)
// console.log(newNums)
//ya:=>
//Method:2
//const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
// return num>4 //agr scope{} agr hm start kardenge to yh apko return keyword likhna pdega nhi to empty array return hoga
// })
// console.log(newNums)
//Method:3
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })
// console.log(newNums)
const books=[
    {
        title:'Book One',genre:'Fiction',publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',publish:1980,edition:2000
    },
    {
        title:'Book Three',genre:'History',publish:1979,edition:2013
    },
    {
        title:'Book Four',genre:'Java',publish:1995,edition:1996
    },
    {
        title:'Book five',genre:'Science',publish:1970,edition:1999
    },
    {
        title:'Book Six',genre:'Hindi',publish:2000,edition:2016
    },
    {
        title:'Book Seven',genre:'English',publish:1480,edition:1704
    },
    {
        title:'Book Eight',genre:'javascript',publish:1967,edition:1985
    },
    {
        title:'Book Nine',genre:'DSA',publish:1940,edition:2012
    }
    
]
let userBook=books.filter((kitab)=>kitab.genre==='Java')
    userBook=books.filter((kitab)=>{return kitab.edition>=2000})
console.log(userBook)
