# gobarber
 Api escrita em node.js para uma aplicação de salão de beleza :

 O usuário administrador do salão poderá :

  - Logar no sistema. (JWT).
  - Adicionar um avatar ao seu perfil.
  - Listar/cancelar agendamentos salvos. (POSTGRES SQL)
  - Receber notificações em tempo real sobre agendamentos salvos.(mongoDB)


  O usuario poderá:

     - Criar um novo perfil.
     - Logar no sistema.
     - Listar/cancelar seus agendamentos feitos.
     - Listar prestadores de serviço.
     - Listar e agendar horários por prestadores.

O sistema também:
 - Fila de envio de email sobre agendamentos e cancelamentos. (processamento paralelo com redis).
