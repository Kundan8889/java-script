//scopes
let a=100;
if(true){
    let a=10;
    var b=20;
    const c=40;
    //console.log("Inner:",a);//block scope
}
// console.log(a);//global scope
// console.log(c);
/*===========>Next<================ */
function one(){
    const username="Kundan Rathore";
    function two(){
    const website="googel.com";
    console.log(username+", "+website);
    }
    //console.log(website);
   // two();
}
//one();
/*===========>Next<================ */
if(true){
    const username="Kundan Rathore";
    if(username==="Kundan Rathore"){
        const website="googel.com";
        // console.log(username+", "+website);
    }
}
/*===========>Intresting<================ */
// console.log(addOne(5));//ishke pehle bhi call hojayega
function addOne(num){
    return num+1;
}
// console.log(addOne(5));
// console.log(addTwo(8));//error bcz hamne initialize kardiya
 const addTwo =function(num){ //expresion
    return num+2;
 }
 console.log(addTwo(8));