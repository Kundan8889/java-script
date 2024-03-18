/* javascript Execution Context:=>
{}-->Global Execution Context(jaha par bhi Global Execution Context banega ushko refral kardiya jata hain ish this variable se ->ish this variable )
two type of EC:
=>Global Execution Context
=>Function Execution Context
lekin kuch documentaion ham padenge jese mongos vagera to vha par ek or  Execution Context aata hain
=>Eval Execution Context
{}-->Memory Creation phase/Execution phase
*/
//Ex:=>
let val1=10
let val2=20
function addNum(num1,num2){
let total=num1+num2;
return total
}
let result1=addNum(val1,val2)
let result2=addNum(6,4)
/*Explain this code:
=>1:Global Execution phase(ishe this se allocate kiya jata hain)
2.Memory  phase:
val1-->undefined
val2-->undefined
addNum-->defination
result1-->undefined
result2-->undefined
3.Execution  phase:
val1-->10;
val2=5;
add Num-->New variable environment+Execution thread





*/




