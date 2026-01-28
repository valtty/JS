const num = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
let userNum = 0;

while (userNum !== num) {
    userNum = Number(prompt(`Попытка номер ${attempt + 1}. Введите следующее число:`));
    
    if (isNaN(userNum)) {
        console.log("Введите число");
        continue;
    }
    attempt++;
    if (userNum < num) {
        console.log("Загаданное число больше");
    } else if (userNum > num) {
        console.log("Загаданное число меньше");
    } else {
        console.log(`Вы угадали число ${num} за ${attempt} попыток`);
    }
}