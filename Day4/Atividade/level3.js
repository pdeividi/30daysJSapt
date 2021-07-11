Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.

let ano = prompt("Informe um ano: ");
let num
let mes = prompt("Informe um mês para consultar: ").toLowerCase();
switch (mes) {
  case "janeiro":
    num = 1;
    break;
  case "fevereiro":
    num = 2;
    break;
  case "marco":
    num = 3;
    break;
  case "abril":
    num = 4;
    break;
  case "maio":
    num = 5;
    break;
  case "junho":
    num = 6;
    break;
  case "julho":
    num = 7;
    break;
  case "agosto":
    num = 8;
    break;
  case "setembro":
    num = 9;
    break;
  case "outubro":
    num = 10;
    break;
  case "novembro":
    num = 11;
    break;
  case "dezembro":
    num = 12;
    break;
  default:
    console.log('Mês inválido');
}
let numDias = new Date(ano, num, 0).getDate();
console.log(`O mês de ${mes} no ano de ${ano} tem ${numDias} dias.`);
VM1026:45 O mês de fevereiro no ano de 2016 tem 29 dias.