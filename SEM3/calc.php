<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title><?php 
        echo "Hello world";
    ?></title>
    <link rel="stylesheet" href="style.css">
    <script src="./js/app.js"></script>

</head>

<body>
    
    <div>
        <header>
            <h1>Галерея</h1>
        </header>
        
        <main>
            <hr>
            <nav>
                <a href="index.html">Главная</a> 
                <a href="gallery.html">Галерея</a> 
                <a href="calc.html">Калькулятор</a> 
            </nav>
            <hr>
            <input type="text" placeholder="Ваш возраст" id="age">
            <button onclick="hello()">Отправить</button><br>
            вывод: <span id="result"></span>
        </main>
        <hr>
        <footer>
            (c)2023
        </footer>
        <hr>
    </div>
</body>

</html>
