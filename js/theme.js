// Получение элементов из html и сохранение их в переменную
const themebuttnon = document.getElementById("theme-toggle");
const themelink = document.getElementById("theme-link");

let savedTheme = localStorage.getItem("theme");

// Если в памяти нету сохраненной темы то делаем проверку и сохраняем
if (savedTheme === null){
    savedTheme = "dark";
}

function applyTheme(theme){
    if(theme === "white"){
        // Что произойдет если переключаемся на светлую тему
        // Меняем содержимое и параметры элементов thml <button> и <link>
        themelink.setAttribute("href", "css/main-white.css");
        // Изменили атрибут href у тега link - тем самым поменяв файл css который отвечет за тему
        themebuttnon.textContent = "🌑";
    }else{
        themelink.setAttribute("href", "css/main-dark.css");
        themebuttnon.textContent = "☀️";
    }
}

// Вызов функции для того чтобы применить тему сайта из сохраненной темы выбранной пользователем
applyTheme(savedTheme);

// Тригер при нажати на кнопку вызвать функцию изменения темы и сохранить вывод
themebuttnon.addEventListener("click", function(){
    let currentTheme = localStorage.getItem("theme");

    if(currentTheme === "white"){
        localStorage.setItem("theme", "dark");
        // setitem - установить значение в память браузера ("в какое значение", "что положить")
        applyTheme("dark");
    }else{
        localStorage.setItem("theme", "white");
        applyTheme("white");
    }
}
);