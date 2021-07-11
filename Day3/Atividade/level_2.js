Exercises: Level 2
1 - Write a script that prompt the user to enter base and height of the 
 and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50

let base = prompt('Digite a base:')
let altura = prompt('Digite a altura:')
let area = (0.5 * base * altura)/2
console.log('A área é:'+area)
A área é 50

2 - Write a script that prompt the user to enter side a, side b, and 
side c of the triangle and and calculate the perimeter of triangle 
(perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

let ladoA = prompt('Digite a lado A do triangulo:')
let ladoB = prompt('Digite a lado B do triangulo:')
let ladoC = prompt('Digite a lado C do triangulo:')
let perimetro = (parseInt(ladoA) + parseInt(ladoB) + parseInt(ladoC))
console.log('O perímetro do triangulo é '+perimetro)
O perímetro do triangulo é 12

3 - Get length and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let heigth = prompt('Digite a altura do retangulo:')
let width = prompt('Digite a largura do retangulo:')
let perimeter = (2 * (parseInt(heigth) + parseInt(width)))
console.log('A área do retaangulo é '+ perimeter)
A área do retaangulo é 20

4 - Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi = 3.14
let raio = prompt('Digite o raio do circulo:')
let area = (pi * raio + raio)
let circunferencia = 2 * pi * raio
console.log('A área do circulo é '+ area)
console.log('A circunferencia do circulo é '+ circunferencia)

A área do circulo é 31.40000000000000210
A circunferencia do circulo é 62.800000000000004

5 - Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 2
let y = 2*x-2
console.log(y)
2

6 - Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x = 2
let y = 2
let m = y*2-y*1/x*2-x*1
console.log(m)
0

let x = 6
let y = 10
let m = y*2-y*1/x*2-x*1
console.log(m)
10.666666666666668

7 - Compare the slope of above two questions.


8 - Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values 
and figure out at what x value y is 0.
let x = -3
let y = x**2 + 6*x + 9
console.log(y)
0

9 - Writ a script that prompt a user to enter hours and rate per hour. 
Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120

let qtd_h = prompt('Quantidade de horas')
let vlr_h = prompt('Qual o valor recebido por hora?')
console.log('O valor do salário semanal é '+qtd_h*vlr_h)
O valor do salário semanal é 1120

10 - If the length of your name is greater than 7 say, your name is long else say your name is short.
let meu_nome = 'Deividi'
if (meu_nome.length > 7) {
console.log('Nome é grande')
}else{
console.log('Nome é curto')
}
Nome é curto

11 - Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh

let prim_nome = 'Pedro'
let sobrenome = 'Pereira'
if (prim_nome.length > sobrenome.length) {
console.log(`Seu nome ${prim_nome} é maior que seu sobrenome ${sobrenome}.`)
}else{
console.log(`Seu sobrenome ${prim_nome} é menor que seu sobrenome ${sobrenome}.`)
}

Seu sobrenome Pedro é menor que seu sobrenome Pereira.

12 - Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.

let myAge = 250
let myAge = 250
if (myAge > yourAge){
  let result = myAge - yourAge
  console.log(`Eu sou ${result} anos mais velho que você.`)
}else{
  let result = yourAge - myAge
  console.log(`Você é ${result} anos mais velho que eu.`)
}
Eu sou 225 anos mais velho que você.

13 - Using prompt get the year the user was born and if the user is 18 or above 
allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

let idade_dirigir = 18
let ano_atual = new Date()
let ano_nasc_usuario = prompt('Qual o ano de nascimento do usuário?')
let idade_usuario = ano_atual.getFullYear() - parseInt(ano_nasc_usuario)
if ((ano_atual.getFullYear() - ano_nasc_usuario) > idade_dirigir){
  console.log(`Você nasceu no ano ${ano_nasc_usuario}.\nVocê tem ${idade_usuario} anos. Você é velho suficiente para dirigir.`) 
}else{
console.log(`Você nasceu no ano ${ano_nasc_usuario}.\nVocê tem ${idade_usuario} anos.` +' Você terá permissão de para dirigir após '+(idade_dirigir-idade_usuario) + ' anos.')
}
//para o ano de 1980
Você nasceu no ano 1980.
Você tem 41 anos. Você é velho suficiente para dirigir.

//para o ano de 2006
Você nasceu no ano 2006.
Você tem 15 anos. Você terá permissão de para dirigir após 3 anos.

14 - Write a script that prompt the user to enter number of years. Calculate the 
number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.
let qtd_anos = prompt('Informe a quantidade de anos desejada para viver maior que 100')
console.log(`Você viveu ${qtd_anos * 365 * 24 * 60 * 60} segundos.`)
//informado 130
Você viveu 4099680000 segundos.

15 - Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
let data = new Date()
let data1 = data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate() +' ' +data.getHours()+':'+data.getMinutes()
console.log(data1)
2021-7-10 21:49

DD-MM-YYYY HH:mm
let data = new Date()
let data1 = data.getDate()+'-'+(data.getMonth()+1)+'-'+data.getFullYear()+' '+data.getHours()+':'+data.getMinutes()
console.log(data1)
10-7-2021 21:50

DD/MM/YYYY HH:mm
let data = new Date()
let data1 = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+' '+data.getHours()+':'+data.getMinutes()
console.log(data1)
10/7/2021 21:50