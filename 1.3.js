const name = prompt('Ваше имя: ');
const age = prompt('Ваш возраст: ');

const convertedNumber = Number(age);

if (convertedNumber < 18) {
    console.log(`Привет, ${name}! Ты ещё школьник.`);
} else if (convertedNumber >= 18 && convertedNumber <= 65) {
    console.log(`Привет, ${name}! Ты взрослый человек, заходи.`);
} else {
    console.log(`Привет, ${name}! Для возрастных лиц у нас скидки.`);
}