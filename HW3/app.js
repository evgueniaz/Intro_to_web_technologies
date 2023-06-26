salut();


function salut() {
    var userName = document.getElementById("name").value;
    console.log(userName);
    document.getElementById(userName).innerText = "Привет, " + userName + "!";
    document.getElementById("name").value = "";
    }


function sendMessage() {
    var chatMessage = document.getElementById("chatMessage").value;
    var chatName = document.getElementById("chatName").value;
    console.log(chatMessage);
    document.getElementById("message1").innerText = chatName + " : " + chatMessage;
    document.getElementById("chatMessage").value = "";
    document.getElementById("chatName").value = "";
}

// const form = document.querySelector('form');
// const input = document.querySelector('input[type="text"]');
// const salut = document.querySelector('#salut');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = input.value.trim();

//     if (name === '') {
//         alert('Пожалуйста, введите ваше имя');

//         input.focus();
//     } else {
//         salut.textContent = `Привет, ${name}!`;
//         input.value = '';
//     }
// })