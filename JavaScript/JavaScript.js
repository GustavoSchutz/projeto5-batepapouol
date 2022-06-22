let messageData = [
	{
		from: "João",
		to: "Todos",
		text: "entra na sala...",
		type: "status",
		time: "08:01:17"
	},
	{
		from: "João",
		to: "Todos",
		text: "Bom dia",
		type: "message",
		time: "08:02:50"
	},
]
function writeMessages() {
    contador = messageData.length;
    document.querySelector("ul").innerHTML = "";
  
    for (let index = 0; index < messageData.length; index++) {
      const ulMessageTemplate = `
        <li>
            <div class="btn-delete">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
            <span onclick="finalizarTarefa(this)">${tarefas[index]}</span>
        </li>
    `;
      document.querySelector("ul").innerHTML += ulMessageTemplate;
    }
  }
  
  criarTarefasExemplo();