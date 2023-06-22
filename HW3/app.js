function salut() {
    var userName = document.getElementById("name").value;
    message = 'Привет, ' + userName + '!'
    document.getElementById("result").innerText = message;
    document.getElementById("name").value = '';
    }

    salut();


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