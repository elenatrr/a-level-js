//My Marking
function exercise(homeworkNum, exerciseNum) {
   console.log("Homework №" + homeworkNum + " | Exersice №" + exerciseNum);
};
//Homework#4
exercise(4, 1);

function bigFunc(someFunc, context, ...arg){
   return function(){
      someFunc.apply(context, arg);
   }
}

function func (a,b,c){
   console.log(a,b,c);
   console.log(`тебе ${2022 - this.year} лет `);
}
const context = {
   name: 'Lena',
   year: 2000,
}
const returnedFunction = bigFunc(func,context,1,2,3)

returnedFunction();
//============================================
exercise(4, 2);
const objectA = {
   a: 1,
   b: 2,
   c: 3,
   d: 0,
   e: -10,
}

const sumOf = function () {
   const values = Object.values(this).filter(el => el > 0);
   let sum = 0;
   for (i = 0; i < values.length; i++) {
      sum += values[i];
   }
   return sum;
}
console.log(sumOf.apply(objectA));
//============================================
exercise(4, 3);
const valObject0 = {
   values: [1, '2', 4, 8, '8',  3, 10, null, false],
};
  
const getNewArray = function () {
   const values = this.values;
   console.log(values);
   if (values == undefined) {
      console.log("Не найдено");
   } else {
      return values.filter(item => item % 2 === 0 && item > 2 && item < 10 && item === Number(item));
   };
}
console.log(getNewArray.call(valObject0));
//============================================
exercise(4, 4);
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
const result = function getCity() {
   for (const [key, value] of Object.entries(this)) {
      console.log(`${key} - это ${value}`);
   };
}
result.call(citiesAndCountries);
//============================================
exercise(4, 5);
const namesOfDays = {
   ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(namesOfDays.ru[1]);
function getNameOfDay(lang, day) {
   console.log(namesOfDays[lang][day - 1]);
}
getNameOfDay('ru', 6);
getNameOfDay('en', 3);
//============================================
exercise(4, 6);
const user1 = {
   name: 'Vlad'
};
const user2 = {
   age: 1
};

function setProto(currentObj, protoObj) {
   currentObj.__proto__ = protoObj;
}
setProto(user2, user1);
console.log(user2);
console.log(user2.name);
//============================================
exercise(4, 7);

const person = {
   setName(personName) {
      this.name = personName;
   },
   setAge(personAge) {
      this.age = personAge;
   },
   getName() {
      console.log(this.name);
   },
   getAge() {
      let thisAge = this.age;
      function ageValidation(thisAge) {
         if (thisAge < 18) {
            console.log('Validation Error',);
         } else {
            console.log(thisAge);
         };
      };
      return ageValidation(thisAge);
   },
}
let person1 = {
   surname: "Gold"
};
person1.__proto__ = person;
person1.setName("Hanna");
person1.getName();
person1.setAge(17);
person1.getAge();
person1.setAge(22);
person1.getAge();