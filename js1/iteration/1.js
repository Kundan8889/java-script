//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
//and:==>
// for (let i = 0; i <=10; i++) {
//    // console.log(`Outer loop value:${i}`)
//     for(let j = 0; j < 10; j++){
//         //console.log(`inner loop value:${j} and inner loop value:${i}`)
//         console.log(i+'*'+j+'='+i*j)
//     }
   
// }
// /* break keyword */
// for (let index = 0; index <=10; index++) {
//     if(index==5){
//         console.log(`detected 5 `)
//         break // no  maafi 
//     }
//     console.log(`value of i is ${index}`)
    
// }
/* continue keyword */
for (let index = 0; index <=10; index++) {
    if(index==5){
        console.log(`detected 5 `)
        continue//ek baar maaf kardo
    }
    console.log(`value of i is ${index}`)
    
}