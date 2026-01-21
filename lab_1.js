//первое задание//

const myName = "Валерия";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Никита Михайлович";
const reasonText = "мне это нравится";
const numberOfMonth = "1";

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучала ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`;

console.log(myInfoText);

//второе задание//

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);

console.log("Длина строки:", myInfoText.length);
console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);

//третье задание//

let userName = prompt("Как вас зовут?");
userName = userName.trim().toLowerCase();
alert(`Вас зовут ${userName}`);

//четвертое задание//

let userName2 = prompt("Как вас зовут?");
userName2 = userName2.trim().toLowerCase();
let userAge = prompt("Сколько вам лет?");
userAge = parseInt(userAge.trim(), 10);

if (isNaN(userAge)) {
    userAge = "не указано";
}

alert(`Вас зовут ${userName2} и вам ${userAge} лет`);

//пятое//

const userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезку строки"));
const result = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${result}`);

//шестое//

const userText = prompt("Введите текст").trim();
const wordFromText = prompt("Введите слово из текста").trim();
const indexOfWord = userText.indexOf(wordFromText);
const res = userText.slice(0, indexOfWord);

alert(`Результат: ${res}`);

//седьмое//

const javascriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

const middleIndex = Math.floor(javascriptDescription.length / 2);

const halfString = javascriptDescription.slice(0, middleIndex);

const replacedString = halfString.replaceAll('а', 'А');

const noSpacesString = replacedString.replaceAll(' ', '');

const repeatedString = noSpacesString.repeat(3);

const finalMiddleIndex = Math.floor(repeatedString.length / 2);
const middleChar = repeatedString[finalMiddleIndex];

console.log(middleChar);
console.log(repeatedString);

