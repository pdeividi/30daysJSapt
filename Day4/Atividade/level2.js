Exercises: Level 2
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

let notaAluno = prompt('Informe a nota do aluno.')
if (notaAluno > 0 && notaAluno <= 49){
  console.log('F')
}else if(notaAluno > 50 && notaAluno <= 59){
  console.log('D')
}else if(notaAluno > 60 && notaAluno <= 69){
  console.log('C')
}else if(notaAluno > 70 && notaAluno <= 79){
  console.log('B')
}else{
  console.log('A')
}
88 -> A
65 -> C

Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

let mes = prompt('Digite um mes')
if (mes == 'Dezembro' || mes == 'Janeiro' || mes =='Fevereiro'){
  console.log('A estação é Inverno')}
else if(mes == 'Setembro' || mes == 'Outubro' || mes =='Novembro'){
  console.log('A estação é Outono')}
else if(mes == 'Março' || mes == 'Abril' || mes =='Maio'){
  console.log('A estação é Primavera')
}else{
  console.log('A estação é Verão')
}
Maio -> A estação é Primavera

Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
	
let day = prompt('Informe um dia.')
let dayTeste   = day
let workDay    = ['Monday','Tuesday','Wednesday','Thursday','Friday']
let dayWeekend = ['Saturday','Sunday']

if (dayTeste.toLowerCase(day) == dayWeekend[0].toLowerCase() || 
    dayTeste.toLowerCase(day) == dayWeekend[1].toLowerCase()){
  
  console.log('É fim de semana.')

}else if(dayTeste.toLowerCase(day) == workDay[0].toLowerCase() ||
         dayTeste.toLowerCase(day) == workDay[1].toLowerCase() ||
         dayTeste.toLowerCase(day) == workDay[2].toLowerCase() ||
         dayTeste.toLowerCase(day) == workDay[3].toLowerCase() ||
         dayTeste.toLowerCase(day) == workDay[4].toLowerCase()){
  
  console.log('É dia de trabalhar.')

}else{
  
  console.log('Dia inválido')

}
SUNdaY ->   É fim de semana.	
thursday -> É dia de trabalhar.	
ghfghf ->   Dia inválido.