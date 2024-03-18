//now ab ham baat karenge obj ko singleton me kese kar sakte hain  ya constructor me kese kar sakte hain
//const tinderUser=new Object() //singleton object
//same
const tinderUser={} //non singleton object
//basic
tinderUser.id="123abc"
tinderUser.name="kundan"
tinderUser.isLoggedIn=false
//console.log(tinderUser);//both are same
//object ke andr obj lenge
const regularUser={
    email:"kundanrathore450@gmail.com",
    //ye bhi ek obj hi hain==>
    fullname:{
        userfullname:{
            firstname:"kundan",
            lastname:"rathore"
        }
    }
}
    // console.log(regularUser)
    // console.log(regularUser.fullname)
    // console.log(regularUser.fullname.userfullname)
    //now jese hmne array ko merge kiya tha aese hi ham obj ko bhi merge karenge aesr case hamare aayenge
    const obj1={1:"a",2:"b"}
    const obj2={3:"a",4:"b"}
    // const obj3={obj1,obj2}//vhi array vali problem aayegi array ke andr array hojayega
    //const obj3=Object.assign({},obj1,obj2)//{} --> ye ek option parameters hota hain but ishko dena is a good
    //hosakta hain ki hamare pass or bhi values ho ish lie empty {} array ka use karte hain
    //is not a  com lekin jab ham new obj return kar rahe hain or memory me ja hi raha hain to {} empty object dedo or ushi ko aap target manlo
    const obj3={...obj1, ...obj2}//90% ham yhi use karenge bcz easy bhi hain
    //console.log(obj3)
//jab bhi database se jo values aati hain vo kuch ish tarah se aati hain
const user=[
    {
        id:1,
        email:"kundan234@gmail.com", //aesi kai lavues aaskti hain
    },
    {
        id:1,
        email:"kundan134@gmail.com",
    },
    {
        id:1,
        email:"kundan534@gmail.com",
    },
    {
        id:1,
        email:"kundan634@gmail.com",
    },
]
 //agr aaray ish tarah array ke andr bhot sare obj hain or valus print karwani hain
 user[1].email
 console.log(tinderUser)
 console.log(Object.keys(tinderUser))//keys found karsakte hain bhaiya
 console.log(Object.values(tinderUser))//values found karsakte hain bhaiya
 console.log(Object.entries(tinderUser))//entries found karsakte hain bhaiya
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 