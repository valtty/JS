// 1

const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

let userLogin = prompt("Введите логин");
let userPassword = prompt("Введите пароль");

userLogin = userLogin.trim();
userPassword = userPassword.trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert("Логин и (или) Пароль введены неверно");
}

//2

const question1 = "Сколько будет 2 + 2?";
const correctAnswer1 = 4;

const question2 = "Сколько будет 2 * 2?";
const correctAnswer2 = 4;

const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const correctAnswer3 = 1;

const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const correctAnswer4 = 12;

const question5 = "Сколько будет 2 + 2 * 2?";
const correctAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

let userAnswer1 = prompt(question1);
userAnswer1 = Number(userAnswer1);
if (userAnswer1 === correctAnswer1) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

let userAnswer2 = prompt(question2);
userAnswer2 = Number(userAnswer2);
if (userAnswer2 === correctAnswer2) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

let userAnswer3 = prompt(question3);
userAnswer3 = Number(userAnswer3);
if (userAnswer3 === correctAnswer3) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

let userAnswer4 = prompt(question4);
userAnswer4 = Number(userAnswer4);
if (userAnswer4 === correctAnswer4) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

let userAnswer5 = prompt(question5);
userAnswer5 = Number(userAnswer5);
if (userAnswer5 === correctAnswer5) {
    alert("Ответ Верный");
    correctAnswers++;
} else {
    alert("Ответ Неверный");
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);

//3 в отдельной папке 

///4

let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
}

let j = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    j++;
} while (j < 3);

//5
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
alert(`Сумма чисел от 0 до 100 равна: ${sum}`);

//6

const clientName = "Игорь";
let clientSpentForAllTime = 110;
const clientSpentToday = 25;
let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 500) {
    discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);
clientSpentForAllTime += clientSpentToday;
alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);

//7

const password = prompt("Введите пароль");
const hasMinLength = password.length >= 3 && password.length <= 20;
const hasUpperCase = /[A-Z]/.test(password);
const hasNumber = /\d/.test(password);

if (hasMinLength && hasUpperCase && hasNumber) {
    alert("Пароль валидный. Добро пожаловать в аккаунт");
} else {
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.");
}