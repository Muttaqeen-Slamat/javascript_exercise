//let hours =  `8`
//let days =  `30`



//let rate = (hours * days)
 //console.log(rate)


//let salary = (rate * days)
//console.log(salary)



let hours = +prompt ("enter your hours worked: ")
let rate = +prompt ("enter your rate: ")
let salary = hours * rate
let curFormat = Intl.NumberFormat()
//console.log(`Your salary is R${curFormat.format(salary)}`)
console.log(`Your salary is R${salary.toFixed(2)}`)