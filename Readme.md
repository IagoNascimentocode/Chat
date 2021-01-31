<h1>Chat</h1>
<br>
<h1>Sobre:</h1>
1.0 - Servimos as paginas html com express e path e criamos um servidor com o express e colocamos o socket.io para receber as requisições.
Precisamos criar um array para por as menssagens e exibir para o client. Faça a conexão do socke.io com o front.
Você precisa de uma div para exibir as mensagens, um formulario para que contenha um input e um button(submit) para enviar a mensagem.

Crie um função que coloque dentro da div as mensagens dentro de uma lista usando o laço de repetição.

Atrasvez do DOM selecione o formulario e o adicione um evento submit.É necessario evitar o curso do evento pq ele irá enviar a mensagem pelo protocolo http, evite isso com "preventDefault()".Feito isso podemos criar uma constante para receber as mensagens que vamos pegar com o "document.forms" e passe em seguida os nomes dentro do index. atribua uma string vazia a esse mesmo elemento que foi selecionado com o "document" e o envie para o back-end 



