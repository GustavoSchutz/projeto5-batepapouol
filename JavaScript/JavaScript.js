let newMessage;
let username;
let messagesData = [
  {
    "from": "dddddddddddd",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:07:15"
  },
  {
    "from": "null",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:07:24"
  },
  {
    "from": "outro",
    "to": "Todos",
    "text": "alalsdlasd",
    "type": "message",
    "time": "08:07:26"
  },
  {
    "from": "outro",
    "to": "Todos",
    "text": "2",
    "type": "message",
    "time": "08:07:44"
  },
  {
    "from": "null",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:07:45"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:08:14"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:08:24"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:08:30"
  },
  {
    "from": "outro",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:08:45"
  },
  {
    "from": "dawdawdawdaw",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:08:51"
  },
  {
    "from": "awdiojawidjaw",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:09:00"
  },
  {
    "from": "dawdawdawdaw",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:09:30"
  },
  {
    "from": "fedwef",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:10:15"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:10:18"
  },
  {
    "from": "fedwef",
    "to": "Todos",
    "text": "rtjdrj",
    "type": "message",
    "time": "08:10:20"
  },
  {
    "from": "aaaaaaaaaaaaaaa",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:10:22"
  },
  {
    "from": "fedwef",
    "to": "Todos",
    "text": "uy",
    "type": "message",
    "time": "08:10:28"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:10:30"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:10:33"
  },
  {
    "from": "tkffk",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:11:00"
  },
  {
    "from": "tkffk",
    "to": "Todos",
    "text": "wfew",
    "type": "message",
    "time": "08:11:05"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:11:15"
  },
  {
    "from": "fedwef",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:11:15"
  },
  {
    "from": "tkffk",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:11:15"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:11:27"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:11:34"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "Teste",
    "type": "message",
    "time": "08:11:41"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:11:45"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:11:48"
  },
  {
    "from": "davinci",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:11:51"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:12:00"
  },
  {
    "from": "Zé",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:12:00"
  },
  {
    "from": "aaaaaaaaaaaaaaa",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:12:30"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:12:33"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "Todos",
    "text": "aaaaaaaaaaaa",
    "type": "message",
    "time": "08:12:38"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "aaaaaaaaaa",
    "text": "aaaaaaaaaaaa",
    "type": "message",
    "time": "08:12:45"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "Todos",
    "text": "aaaaaaaaaaaaaaaaa",
    "type": "private_message",
    "time": "08:12:52"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "Todos",
    "text": "aaaaaaaaaaaaaaaaaa",
    "type": "private_message",
    "time": "08:13:02"
  },
  {
    "from": "htdtrh",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:13:07"
  },
  {
    "from": "htdtrh",
    "to": "Todos",
    "text": "msg",
    "type": "message",
    "time": "08:13:12"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "aaaaaaaaaa",
    "text": "teste",
    "type": "private_message",
    "time": "08:13:14"
  },
  {
    "from": "htdtrh",
    "to": "Todos",
    "text": "msy",
    "type": "message",
    "time": "08:13:22"
  },
  {
    "from": "null",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:13:23"
  },
  {
    "from": "htdtrh",
    "to": "Todos",
    "text": "j",
    "type": "message",
    "time": "08:13:27"
  },
  {
    "from": "htdtrh",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:13:30"
  },
  {
    "from": "Zé Guilherme",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:13:35"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:13:40"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:13:45"
  },
  {
    "from": "aaaaaaaaaa",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:13:45"
  },
  {
    "from": "davinci",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:13:45"
  },
  {
    "from": "null",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:13:45"
  },
  {
    "from": "dhdth",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:13:53"
  },
  {
    "from": "dhdth",
    "to": "Todos",
    "text": "j",
    "type": "message",
    "time": "08:14:01"
  },
  {
    "from": "dhdth",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:14:15"
  },
  {
    "from": "rey7j",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:14:42"
  },
  {
    "from": "rey7j",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:15:00"
  },
  {
    "from": "druj",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:15:23"
  },
  {
    "from": "Zé Guilherme",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:16:00"
  },
  {
    "from": "Zé",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:16:01"
  },
  {
    "from": "druj",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:16:15"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:17:15"
  },
  {
    "from": "aaa",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:17:49"
  },
  {
    "from": "dth",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:17:49"
  },
  {
    "from": "aaa",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:18:00"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:18:11"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:18:30"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:18:45"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "Aloooow",
    "type": "message",
    "time": "08:18:51"
  },
  {
    "from": "aaa",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:19:05"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:19:15"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:19:53"
  },
  {
    "from": "aaa",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:20:00"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:20:15"
  },
  {
    "from": "dth",
    "to": "Todos",
    "text": "yj",
    "type": "message",
    "time": "08:20:20"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:20:23"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:20:45"
  },
  {
    "from": "dth",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:21:00"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:21:17"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:21:30"
  },
  {
    "from": "rtjr",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:21:36"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:21:43"
  },
  {
    "from": "rtjr",
    "to": "Todos",
    "text": "alo",
    "type": "message",
    "time": "08:21:43"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:21:49"
  },
  {
    "from": "rtjr",
    "to": "Todos",
    "text": "a",
    "type": "message",
    "time": "08:21:59"
  },
  {
    "from": "ola",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:22:00"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "deu bom finalmente p*rraaaaaaaaaaaaaa",
    "type": "message",
    "time": "08:22:00"
  },
  {
    "from": "gyguygyug",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:22:08"
  },
  {
    "from": "and",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:22:15"
  },
  {
    "from": "rtjr",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:22:30"
  },
  {
    "from": "ahdhuduh",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:22:30"
  },
  {
    "from": "Ra",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:22:44"
  },
  {
    "from": "gyguygyug",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:22:45"
  },
  {
    "from": "Raul",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:23:00"
  },
  {
    "from": "lalala",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:23:03"
  },
  {
    "from": "lalala",
    "to": "Todos",
    "text": "gfdhfdgh",
    "type": "message",
    "time": "08:23:10"
  },
  {
    "from": "futk",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:23:32"
  },
  {
    "from": "futk",
    "to": "Todos",
    "text": "mg",
    "type": "message",
    "time": "08:23:34"
  },
  {
    "from": "asdasdasd",
    "to": "Todos",
    "text": "entra na sala...",
    "type": "status",
    "time": "08:23:39"
  },
  {
    "from": "futk",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:23:45"
  },
  {
    "from": "lalala",
    "to": "Todos",
    "text": "sai da sala...",
    "type": "status",
    "time": "08:23:45"
  }
];

function buscarDados() {
  const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
  promessa.then(writeMessages);
  promessa.catch(tratarFalha);
}
setInterval(buscarDados, 1000*3)

function tratarFalha(erro) {
  console.log('falhou')
	const statusCode = erro.response.status;
	console.log(statusCode);
}

function writeMessages(messages) {
  let stopRepeating = messages.data;
  let lastMessagesDataTimeNew = (stopRepeating[99].time);
  let lastMessagesDataTime = (messagesData[99].time);
  if (lastMessagesDataTime != lastMessagesDataTimeNew) {
    messagesData = messages.data;
    contador = messagesData.length;
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
    const ul = document.getElementById("scroll");
    const first = ul.lastElementChild;
    first.scrollIntoView(true);
  }
} 
  //writeMessages();
buscarDados();
function writeMessageDataTest() {
  console.log(messagesData);
  console.log("bom dia");
}
writeMessageDataTest();
function readUsername() {
  username = document.getElementById("usernamebox").value;
  logIn(username);
}


function logIn(username) {
  // pegue username
  const postUsername = {
    name: username
  }
  console.log(postUsername);

  const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", postUsername);

  promessa.then(iniciarPostCont)
  promessa.catch(alertError)

  //Enviar post
  //executar funcão sucesso e apagar tela de login ou executar erro e criar uma alert de erro.
}

function alertError(error) {
  console.log(error.response.status);
  alert('Esse nome já está em uso!!');
  
  //let errodelogin = error.response.status;
  //if (errodelogin === "400"){
  //  alert("Nome em uso");
  //}
  //document.getElementById("usernamebox").innerHTML("");
  //error.response.status tá dando erro no log do erro;
}
function iniciarPostCont() {
  buscarDados();
  document.getElementById("loginPage").classList.add("escondido");
  setInterval(keepLogIn, 1000*5);
  }
function keepLogIn() {
  username
  let keepUsername = {
    name: username
  }
  console.log('Me mantendo conectado')
  const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", keepUsername);
  promessa.then(estaon)
  promessa.catch(erroPermanencia)
}
function erroPermanencia() {
  alert("Você caiu")
}
function estaon(){
  console.log("está onlina")
}
function readNewMessage() {
  newMessage = document.getElementById("fname").value;
  console.log(newMessage);
  document.getElementById("fname").value = "";
  enviarMensagem();
}

function enviarMensagem(){
  let postMessage = {
    from: username,
    to: "todos",
    text: newMessage,
    type: "message"
  }
  console.log(postMessage)
  const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", postMessage);
  promessa.then(enviouMensagem);
  promessa.catch(erroenviomensagem);
}

function enviouMensagem(resposta) {
  console.log("deu bom");
}

function erroenviomensagem(e) {
  console.log(e.data);
}

function toggleMenu() {
  let elementoHeader = document.getElementsByClassName('dimmer');
  console.log(elementoHeader)

  elementoHeader.classList.toggle("escondido");



}
