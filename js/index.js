let a = 5;
let b = 10;
console.log("a * b", a * b);
let c = 5;
let d = 10;
console.log("c / d", c / d);
let e = 5;
let f = 10;
console.log("e + f", e + f);
const elevel = 11;
const trueValue = true;
const javaScript = "java script";
const oneHundred = "100";
console.log("elevel", elevel);
console.log("trueValue", trueValue);
console.log("javaScript", javaScript);
console.log("oneHundred", oneHundred);
//5) Переробіть наведений код так, щоб у ньому
//використовувалися операції +=, -=, *=, /=, ++, --
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
console.log("num", num);
//1) Запитати число у користувача, піднести його до квадрату і вивести результат.
const inputValue = Number(prompt("Введіть число:"));
alert("sqr(" + inputValue + ") = " + inputValue ** 2);
//2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
const firstValue = Number(prompt("Введіть first число:"));
const secondValue = Number(prompt("Введіть second число:"));
alert(
  "average(" +
    firstValue +
    ", " +
    secondValue +
    ") = " +
    (firstValue + secondValue) / 2
);
//3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.
const minutesAmount = Number(prompt("Введіть minutes amount:"));
alert(minutesAmount + " minutes  = " + minutesAmount * 60 + " seconds");
/*
4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну 
userName. Запитайте ім'я користувача та внесіть це значення у 
змінну userName. Виведіть повідомлення з привітанням, наприклад, 
'Hello, Vasya!'. (згадайте про конкатенацію)
*/
const userName = prompt("Введіть your name");
alert("Hello " + userName + "!");
