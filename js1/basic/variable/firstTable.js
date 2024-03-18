//Topic --> Variables in js
const accountId = 144637;
let accountEmail = "kundan@450gmail.com";
var accountPassword = "234545";
var accountCity = "Ujjain";
let accountState;
/*
prefer not to  use var
because of issue in bloack scope and functional scope
*/
console.log(accountId);
accountEmail = "kundan@250gmail.com";
accountPassword = "888980";
accountCity = "Indore";
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
