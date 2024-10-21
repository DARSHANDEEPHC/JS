const accountId=122534
let accountEmail="darshan@gmail.com"
var accountPassword="123123"
accountCity="Bangalore"
let accountState
/*
prefer not to use var because of issue in block scope and functional scope
console.log(accountId) is used to print the statement
but console.table([]) is used to print multiple statement at a time in table format
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])