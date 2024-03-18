/* Arrow function */
//this==>current context
/*Important:brwser ke andar jo global object hain vo window object hain*/
const user={
   username:"Kundan",
   price:899,
   welcomeMessege:function(){
    console.log(`${this.username},welcome to  website`);
   // console.log(this)
   }
}
// user.welcomeMessege();
//  user.username="Rathore Ji"
// user.welcomeMessege();/*Important:brwser ke andar jo global object hain vo window object hain*/
// console.log(this)//or yha par {} object hain
//**************next************* */
// function bro(){
//     let username="kundan"
//     //console.log(this.username)//this object ke andar hi kam kar raha hain aese fun ke andr aakar tu abhai this use ni kar sakta
//     console.log(this)
// }
// bro()
//**************next************* */
//now we will discuse arrow function
// const addTwo=(num1,num2)=>{
// return num1+num2 //explicity return:=jab aap return keyword use kar rahe hain
// }
// console.log(addTwo(3,7))
//**************next:Implicity return************* */
// const addTwo=(num1,num2)=>  num1+num2 //curly bracket ke andr rap kara to  return keyword use karenge agar nhi kiya  to return keyword use nhi karga
    // console.log(addTwo(6,7))
    // const addTwo=(num1,num2)=>  (num1+num2)
    // console.log(addTwo(6,6))

    const addTwo=(num1,num2)=>({username:"kundan"})// {username:"kundan"}:=>chota bracket lagana hi padega bro
    console.log(addTwo(6,6))