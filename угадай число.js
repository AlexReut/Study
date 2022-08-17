let nick = prompt("Привет! Как тебя зовут?");
while (!Boolean(nick)){     // альтернативы: (Boolean(nick) == 0); (nick == "" || nick == null)
    nick = prompt("Это имя не подходит. Как тебя зовут?");
}
alert(nick + ", давай сыграем в игру. Я загадаю число, а ты попробуй угадать. Я буду давать тебе подсказки.")
let max = (prompt("Насколько большим может стать наше число? Введи число больше 0"));
while (isNaN(max) || max <= 0) { //  альтернативы: (!Boolean(Number(max)) || max <= 0); (!isFinite(max) || max <= 0)
    max = (prompt("Это не подходит. Введи число больше 0"));
}
let num = Math.trunc(Math.random()*max);
let guess = (prompt("Попробуй угадать число от 0 до " + max));
let count = 1;
while (guess != num){
    count++
    if (isNaN(guess) || guess > max || guess < 0) {
        guess = (prompt("Не подходит! Введи число от 0 до " + max));
    }
    else if (guess < num){
        guess = (prompt("Слишком маленькое. Нужно больше!"));
    }
    else {
        guess = (prompt("Слишком большое. Нужно меньше!"));
    }
}
if (count > 9 || count < 21){
    alert("Угадал! Это число " + num + ". Тебе понадобилось " + count + " попыток.");
}
else {
    switch (count % 10){
        case 1:
            alert("Угадал! Это число " + num + ". Тебе понадобилась 1 попытка.");
            break;
        case 2:
        case 3:
        case 4:
            alert("Угадал! Это число " + num + ". Тебе понадобилось " + count + " попытки.");
            break;
        default:
            alert("Угадал! Это число " + num + ". Тебе понадобилось " + count + " попыток.");
    }
}
