//Devido ao problema em sincronizar git com github, após receber dica de um amigo optei pela seguinte trajetória.
//1-Criar um repositório remoto(https://github.com/pdeividip/30daysJSapt.git) com alguma estrutura básica de início.
//2 - conectar (sem entrar no mérito da chave SSH)
$ git config --global user.email "pdeividip@gmail.com"
$ git config --global user.name "pdeividip"
//3-Fazer um clone do respositório remoto para o PC fazendo então o repositório local.
//4-Após isso, sincronizar por meio de push(Levar do local para o remoto) ou pull(trazer do remoto para o local).

//Demais passos essenciais
//Após criar repositório(https://github.com/pdeividip/30daysJSapt.git) no github, clonar para o local
//utilizando o comando no bash cd users/aptools
$ git clone https://github.com/pdeividip/30daysJSapt.git //o que vai ser clonado

//Adicionando pastas
$ git add Day1

//Aplicar mudanças - commit
$ git commit -m "finalizando Day1"

//Sincronizando repositórios - mandar o que tem local para o remoto
$ git push --set-upstream origin main

//Se atualizar algo no remoto(adicionar arquivo via upload ou fazer mudança/deletar pastas/arquivos) e desejar trazer para o local
$ git pull --set-upstream origin main