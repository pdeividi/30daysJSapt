Exercises: Level 1
1 - Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Pedro'
let lastName = 'Gon'
let country = 'Brazil'
let city = 'Fortaleza'
let age = 41
let isMarried = true
let year = 2010 

console.log(`Meu nome é ${firstName}.\nMeu sobreome é ${lastName}.\nMeu país é ${country}.\nMinha cidade é ${city}.\nMinha idade é ${age}.\nSou casado? Resposta -> ${isMarried}.\nCasei em qual ano? ${year}`)
VM641:9 Meu nome é Pedro.
Meu sobreome é Gon.
Meu país é Brazil.
Minha cidade é Fortaleza.
Minha idade é 41.
Sou casado? Resposta -> true.
Casei em qual ano? 2010

console.log(typeof(age) == typeof(year))
true
console.log(typeof(age) == typeof(firstName))
false
console.log(typeof(age) == typeof(isMarried))
false

2 - Check if type of '10' is equal to 10
console.log(typeof('10') == typeof(10))
false

3 - Check if parseInt('9.8') is equal to 10
console.log(typeof(parseInt('9.8')) == typeof(10))
true

4 - Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.

5 - Figure out the result of the following comparison expression first without 
using console.log(). After you decide the result confirm it using console.log()

4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4' true
4 === '4' false

console.log(4 > 3)
true
console.log(4 >= 3)
true
console.log(4 < 3)
false
console.log(4 <= 3)
false
console.log(4 == 4)
true
console.log(4 === 4)
true
console.log(4 != 4)
false
console.log(4 !== 4)
false
console.log(4 != '4')
false
console.log(4 == '4')
true
console.log(4 === '4')
false

Find the length of python and jargon and make a falsy comparison statement.
let var1 = 'python'
let var2 = 'jargon'
console.log(var2.length > var1.length)
false

6 - Figure out the result of the following expressions first without 
using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python false

console.log(4 > 3 && 10 < 12)
true
console.log(4 > 3 && 10 > 12)
false
console.log(4 > 3 || 10 < 12)
true
console.log(4 > 3 || 10 > 12)
true
console.log(!(4 > 3))
false
console.log(!(4 < 3))
true
console.log(!(4 > 3 && 10 < 12))
false
console.log(!(4 > 3 && 10 > 12))
true
console.log(!(4 === '4'))
true
console.log(var1.search('on') != var2.search('on'))
false

7 - Use the Date object to do the following activities

What is the year today?
let data = new Date()
console.log(data.getFullYear())
2021
What is the month today as a number?
let data = new Date()
console.log(data.getMonth())
6
What is the date today?
let data = new Date()
console.log(data.getDate())
7
What is the day today as a number?
let data = new Date()
console.log(data.getDay())
3
What is the hours now?
let data = new Date()
console.log(data.getHours())
21
What is the minutes now?
let data = new Date()
console.log(data.getMinutes())
19
Find out the numbers of seconds elapsed from January 1, 1970 to now.
let dataAgora = Date.now()
console.log(dataAgora)
1625707491017