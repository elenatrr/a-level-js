//My Marking
function divider() {
   console.log("==================");
};
function exercise(homeworkNum, exerciseNum) {
   console.log("Homework №" + homeworkNum + " | Exersice №" + exerciseNum);
};
//Homework#1
exercise(1, 1);
let userName = "Sarah";
let result = typeof userName === typeof ("string") && userName !== "" ? "Привет, " + userName + "!": "Ошибка, не тот тип данных";
console.log(result);
exercise(1, 2);
//Number
console.log(typeof (1));
console.log(typeof ("abc" / 56)); //NaN
console.log(typeof (25 / 0)); //Infinity
//String
console.log(typeof ('abc'));
//Boolean
console.log(typeof (true));
console.log(typeof (!false));
//Undefined
let abc;
console.log(typeof (abc));
console.log(typeof (hello));
console.log(typeof (undefined));
//Null
console.log(typeof (null));
//Object
console.log(typeof ({}));
console.log(typeof (alert)); //Function
//BigInt
console.log(typeof (999999n));
//Symbol
console.log(typeof (Symbol("a")));
//divider
divider();
//Homework#2
exercise(2, 1);
let arr1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(arr1.join(" | "));
exercise(2, 2);
let stringName = 'Вася;Петя;Вова;Олег';
const newArr = stringName.split(";");
console.log(newArr);
exercise(2, 3);
function hello2(name) {
   if (name === String(name) && name != "") {
      console.log("Привет, " + name);
   }
   else {
      console.log("Привет, гость");
   }
};
hello2("Вася");
hello2("");
hello2(1234567);
exercise(2, 4);
const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsToString = fruits.toString();
const fruitsToStringUpperCase = fruitsToString.toUpperCase();
const fruitsInUpperCase = fruitsToStringUpperCase.split(",");
console.log(fruitsInUpperCase);
exercise(2, 5);
function addOneForAll(...numbers) {
   console.log(numbers.map(function (item, index, array) {
      return item + 1;
   }));
};
addOneForAll(1, 2, 3);
exercise(2, 6);
function getSum() {
   let result = 0;
   for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
   }
   return result;
};
console.log(getSum(1, 1, 8));
exercise(2, 7);
const arr2 = [0, 1, 'hello', 2, 3, 4, '5', '6', 7, null];
function filteredArray(array) {
   let result = array.filter(el => typeof(el) === typeof(1));
   return result;
};
console.log(filteredArray(arr2));
exercise(2, 8);
function arrayTesting(array) {
   let result = array.some(el => el == true);
   if (result == true) {
      console.log("Нашли true значение");
   } else {
      console.log("Ничего нет");
   }
};
const haveTrueValue = arrayTesting([0, false, null, 1]);
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);