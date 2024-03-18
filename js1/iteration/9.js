const mynums=[1,2,3]
const myTotal=mynums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc+currval;
},0) //yha accumulater jo no. daalenge vha se start hogi
//ya
// const myTotal=mynums.reduce((acc,currval)=>acc+currval,1)
// console.log(myTotal)
const shoppingCard = [
  { subName: "javascript", price: 2999 },
  { subName: "Java", price: 3999 },
  { subName: "Data Sciense", price: 12999 },
  { subName: "DSA", price: 3599 },
]
const totalSub=shoppingCard.reduce((acc,sub)=>acc+sub.price,0)
// console.log(totalSub)
