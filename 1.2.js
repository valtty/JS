const userInput = prompt('Введите строку: ');
const convertedNumber = Number(userInput);

if (isNaN(convertedNumber)) {
    console.log('Введено не число');

} else {
    if (convertedNumber % 2 === 0) {
        console.log('Четное число');
    } else {
        console.log('Нечетное число');
    }
}