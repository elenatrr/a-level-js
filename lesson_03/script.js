//My Marking
function exercise(homeworkNum, exerciseNum) {
   console.log("Homework №" + homeworkNum + " | Exersice №" + exerciseNum);
};
//Homework#3
exercise(3, 1);
const usersValue = prompt("Enter a number:");
const usersValueToNumber = Number(usersValue);
for (let i = 1; i <= usersValueToNumber; i++) {
   console.log(i ** 2);
};

exercise(3, 2);
const arr = [3, 5, 12, 9, 23, 93, 17];
const filteredArr = arr.filter((item) => item > 2 && item < 20);
let sum = 0;
function filteredArrSum() {
   for (i = 0; i < filteredArr.length; i++) {
      sum += filteredArr[i];
   };
   return sum;
}
console.log(filteredArrSum());

exercise(3, 3);
const arr3 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
const arr3Flatted = arr3.flat();
console.log(arr3Flatted);
let sum3 = 0;
function arr3Sum() {
   for (i = 0; i < arr3Flatted.length; i++) {
      if (arr3Flatted[i] === Number(arr3Flatted[i]) && arr3Flatted[i] % 2 == 0) {
         sum3 += arr3Flatted[i];
      };
   };
   return sum3;
}
console.log(arr3Sum());

exercise(3, 4);
// function addNewProperty(key, value, object) {
//    const key = prompt("Enter the key");
//    const value = prompt("Enter the value");
// };

exercise(3, 5);
for (let i = 1; i < 11; i++) {
   if (i % 2 == 0 && i % 3 != 0) {
      console.log("Fiz");
   } else if (i % 3 == 0) {
      console.log("FizBuz");
   } else {
      console.log("Buz");
   };
}

exercise(3, 6);
let sum6 = 1;
function factorial(a) {
   for (let i = 0; i < a; i++) {
      sum6 = (a - i) * sum6;
   };
   return sum6;
}
console.log(factorial(10));

exercise(3, 7);
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
function totalReamPaper() {
   let totalConsumption = consumptionPerWeek * weeksAmount;
   let totalSheets = totalConsumption / sheetsInReamPaper;
   for (i = 1; i < 9; i++) {
      if (totalSheets % i != 0) {
         let remainder = totalSheets % i;
         let result = totalSheets + 1 - remainder;
         console.log(result);
         { break; }
      } else {
         console.log(totalSheets);
         { break; }
      };
   };
};
totalReamPaper();