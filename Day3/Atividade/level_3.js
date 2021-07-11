Exercises: Level 3
1 - Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits
(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let data = new Date()
let mes = (data.getMonth()+1) 
if (mes < 10) {
  mes = '0'+mes}
else{
  mes = mes
}

let dia = data.getDate() 
if (dia < 10) {
  dia = '0'+dia}
else{
  dia = dia
}

let hora = (data.getHours()) 
if (hora < 10) {
  hora = '0'+hora}
else{
  hora = hora
}

let minuto = (data.getMinutes()) 
if (minuto < 10) {
  minuto = '0'+minuto
}else{
  minuto = minuto
}
let dataUsuario = data.getFullYear()+'-'+mes+'-'+dia+' '+hora+':'+minuto
console.log(dataUsuario)
VM5533:30 2021-07-10 22:16