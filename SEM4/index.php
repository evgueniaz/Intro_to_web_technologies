<?php
    $title = "Мой сайт";
    //логика подключение БД
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?=$title;?></title>
    <link rel="stylesheet" href="style.css">
    <script defer src="app.js"></script>
</head>

<body>

    <div class="wrapper">
        <header>
            <h1>Мой сайт</h1>
        </header>

        <nav>
            <ul class="menu">
                <li><a href="http://ya.ru" target="_blank">Яндекс</a></li>
                <li><a href="chat.html">Чат</a></li>
            </ul>


        </nav>
        <main>
            <h2>Мой сайт</h2>

            <p>

                <img src="./img/cat.jpg" alt="Котики" width="200">
                <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Maiores porro dolores quam ab dicta
                ipsum dolorem

            </p>

            <div class="chat">
                <h2>Чат</h2>
                <input type="text" id="text">
                <button onclick="send()">Отправить</button><br>
                <span id="messages"></span>
            </div>

        </main>
        <footer>(с)2023</footer>
    </div>

</body>

</html>