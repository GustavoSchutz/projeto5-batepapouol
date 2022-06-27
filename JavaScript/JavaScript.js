
function buscarDados() {
  const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
  promessa.then(writeMessages);
  promessa.catch(tratarFalha);
}

function tratarFalha(erro) {
  console.log('falhou')
	const statusCode = erro.response.status;
	console.log(statusCode);
}

function writeMessages(messages) {
    const messagesData = messages.data;
    contador = messagesData.length;
    console.log(contador);
    document.querySelector("ul").innerHTML = "";
  
    for (let index = 0; index < messagesData.length; index++) {
      const ulMessageTemplate = `
        <li class="${messagesData[index].type}">
          <p class="text">
            <p class="recado">
              <mark>(${messagesData[index].time})</mark>
              <strong>${messagesData[index].from}</strong>
              &nbsppara&nbsp
              <strong>${messagesData[index].to}</strong>
              :&nbsp${messagesData[index].text}
            </p>
          </p>

        </li>
    `;
      document.querySelector("ul").innerHTML += ulMessageTemplate;
    }
  }
  
  //writeMessages();
buscarDados();
