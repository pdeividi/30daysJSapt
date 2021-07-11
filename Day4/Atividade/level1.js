Exercises: Level 1
Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another 
feedback stating to wait for the number of years he neds to turn 18.

let idade = prompt('Informe sua idade')
let idade_dirigir = 18
if (idade >= 18){
  console.log('Você é velho o suficiente para difirir')
}else{
  console.log(`Você só vai poder difirir dqui a ${( idade_dirigir - idade)} anos.`)
}
Você só vai poder difirir dqui a 3 anos.

Compare the values of myAge and yourAge using if … else. Based on the 
comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt('Qual a sua idade')
let myAge = 41
if (myAge > yourAge){
  console.log('Você é mais novo que eu.')
}else{
  console.log('Eu sou mais novo que você.')
} 
Você é mais novo que eu.

If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways

using if else
if (a > b){
  console.log('A é maior que B.')
}else{
  console.log('B é maior que A.')
}
A é maior que B.

ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
  
let result = (a>b)
result
  ? console.log('A é maior que B.')
  : console.log('B é maior que A.')
A é maior que B.
  
Even numbers are divisible by 2 and the remainder is zero. How do you check, 
if a number is even or not using JavaScript?

let numero = prompt('Informe um número de 1 a 10')
if (numero % 2 == 0){
  console.log(`Número ${numero} é par`)
}else{
  console.log(`Número ${numero} é ímpar`)
}
Número 8 é par
Número 7 é ímpar

let numero = prompt('Informe um número de 1 a 10')
let result = (numero % 2 == 0)  
  ? console.log(`Número ${numero} é par`)
  :  console.log(`Número ${numero} é ímpar`)
Número 8 é par
Número 5 é ímpar

