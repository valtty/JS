let number = prompt("Введите число:")
number = Number(number)

if (isNaN(number)) {
    console.log("Ошибка");
} else if (number > 0 ) {
    console.log("Число положительное");
} else if (number < 0 ){
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}