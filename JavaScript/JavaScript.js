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
        <li class="type${messageData[index].type}">
          <p class="text">
            <p class="recado">
              <mark>(${messageData[index].time})</mark>
              <strong>${messageData[index].from}</strong>
              &nbsppara&nbsp
              <strong>${messageData[index].to}</strong>
              :&nbspOlá Maria, tudo bem? Gostaria de tc cmg? Eu gosto do anime do piratinha que estica
            </p>
          </p>

        </li>
    `;
      document.querySelector("ul").innerHTML += ulMessageTemplate;
    }
  }
  
  writeMessages();

