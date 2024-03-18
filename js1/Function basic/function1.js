//function
// function addNumber(number1,number2){  //jab ham fun. ki defination banate hain to ushke andr jo bhi ham input lete hain ushko ham parameters
//     console.log(number1+number2);
// }
// //addNumber(3,"r"); //par jab ham fun. ko call karate hain to ushe ham argument bolte hain
// const  result=addNumber(3,"r");
// console.log("result ",result);
// function addNumber(number1,number2){ 
//     let result=number1+number2;
//     return result;
//     //console.log("unreachable");//unreachable
// }
// const  result=addNumber(3,"r");
// console.log("result :",result) ;
//next==>
function addNumber(username){ 
    if(username===undefined){
        console.log("please enter value")
        return
    }
    return `${username} just logged In`
    //console.log("unreachable");//unreachable
}
// console.log(addNumber("kundan rathore"));
console.log(addNumber());


