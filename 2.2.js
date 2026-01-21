const string = Number(prompt('Введите строку: '));

if (isNaN(string)) {
    console.log('Введено не число');
} else if (string === 100) {
    console.log('Число = 100');
} else if (string > 100) {
    console.log('Число > 100');
} else {
    console.log('Число < 100');
}