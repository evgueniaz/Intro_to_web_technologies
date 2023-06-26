//ввод данных
//x = prompt();
//x = document.getElementById("text").value;
document.getElementById("text").value = '123'
//логика
//вызов функций app()
//x = x + 2

//вывод данных
//alert
//console.log
//document.getElementById("message1").innerText = message;

function app() {
    var message = document.getElementById("text").value
    document.getElementById("message1").innerText = message
    document.getElementById("text").value = ''
    //console.log(message)
}

function hello() {
    var age = parseInt(document.getElementById("age").value)
    
    var str = "Низяяя"
    
    switch (true) {
        case age >= 18 && age < 40: 
            str =  "Все можно";
            break;
        case age >= 40 && age < 60:
            str = 2;
            break;

    }

    if (age >= 18 && age < 40) {
        str = "Все можно"
    } 

    if (age >= 40 && age < 60) {
        str = "Все можно но с трудом"
    }

    if (age >= 60 && age < 100) {
        str = "Еле еле"
    }
 
    document.getElementById("result").innerText = str;
}