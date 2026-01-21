const num1 = Number(prompt("Введите первое число:"));
const num2 = Number(prompt("Введите второе число:"));
const num3 = Number(prompt("Введите третье число:"));
let max;

if (num1 > num2) {
    if (num1 > num3) {
        max = num1;
    } else {
        max = num3;
    }
} else {
    if (num2 > num3) {
        max = num2;
    } else {
        max = num3;
    }
}

console.log(`Наибольшее число: ${max}`);