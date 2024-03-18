/*--->object<--*/
//singleton==>koi bhi constructor agar aap banate hain to ek hi obj banta hain
//jab bhi ham actually me literal ki tarah banate hain to singleton nhi banta
//constructor se agr banega to hamesha singleton  banega
/* Object.create ishi ko ham constructor bolte hain */
//Object literals
//{} onject declaye
const mySym=Symbol("key1")
const JsUser={
    name:"Kundan",
    age:22,
    location:"ujjain",
  /*mySym*/[mySym]:"mykey1",
  //yha data type diffrent hoga aapko symbol me chahiye but yha string data type hoga
 // agar aapko symbol me chahiye to aap [mySym] declaye karna padega
    email:"kundanrathore450@gmail.com",
    isLoggIn:false,
    isLoggInDays:["Monday","Sunday"]
}
//console.log(JsUser.email)//Not a good habit 
//other way to declaye method==>
// console.log(JsUser["email"])
// console.log(JsUser["isLoggInDays"])
// console.log(JsUser["age"])
// console.log(JsUser["name"])
// console.log(JsUser[mySym])//data type Symbol
//values ko change kese karte hain here:==>
JsUser.email="kundanrathore250@gmail.com"
//console.log(JsUser["email"])
//kundan bhai ham values ko lock bhi kar sakte hain jese:==>
//Object.freeze(JsUser);
//now :==>
JsUser.email="kundanrathore350@gmail.com"//can't change values
//console.log([JsUser])
//function
JsUser.greeting=function(){
    console.log("Hello js devlopers");
}
//ab hame jo bhi name hain ush obj ke andar usko refrence karna hain to name ko refrence karne ke liye ushko ham string se baticks me convert karte hain
JsUser.greeting2=function(){
    //ab muje koi bhi variables likhna hai  to me ${} laga ke likh sakte hain
    //jab bhi aapko same obj ko refrence karna hai to ham ${this} ==> jo bhi hmara obj hain ushke andr jitni propertise hain vo hame yha mil jayegi
    console.log(`Hello js devlopers, ${this.name}`);//'Hello js devlopers`==>`` isko ham bolte bticks
}
console.log(JsUser.greeting);//jab bhi bhai apn method ko define karenge to yarr vfun ka refrence ayega
                            //lekin
console.log(JsUser.greeting());//to yarr ab hamne function ka use kiya hain hojayega ab 
console.log(JsUser.greeting2());

