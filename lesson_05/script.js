//My Marking
function exercise(homeworkNum, exerciseNum) {
   console.log("Homework №" + homeworkNum + " | Exersice №" + exerciseNum);
};
//Homework#4
exercise(5, 1);

function getUnique(arr) {
   let uniqueArr = [];
   for (let el of arr) {
      if (!uniqueArr.includes(el)) {
         uniqueArr.push(el);
      };
   };
   return uniqueArr;
}

const arr = [1, 1, 2, 2, 3];
console.log(getUnique(arr));

exercise(5, 2);

const someObj = {
   a: 1,
   b: 2,
   c: 3,
   d: false,
   e: 0,
}

function getKeySum(obj) {
   let objValues = Object.values(obj);
   let filteredValues = objValues.filter((el => el !== false));
   let sum = 0;
   for (i = 0; i < filteredValues.length; i++) {
      sum += filteredValues[i];
   }
   return sum;
}
console.log(getKeySum(someObj));

function reversKey(obj) {
   let newObj = {};
   let objKeys = Object.keys(obj);
   let objValues = Object.values(obj);
   for (i = 0; i < objValues.length; i++){
      newObj[objValues[i]] = objKeys[i];
   }
   return newObj;
}
console.log(reversKey(someObj));

exercise(5, 3);
const holder = document.createElement('div');
holder.className = 'holder';
holder.style.display = "flex";
holder.style.flexWrap = "wrap";
holder.style.maxWidth = "400px";
holder.style.border = "#000 solid 2px";
holder.style.borderRadius = "15px 15px 0 0";
holder.style.overflow = "hidden";
holder.style.fontSize = "20px";

const item1 = document.createElement('div');
item1.className = 'item';
item1.innerText = '1';
item1.style.flex = "0 1 50%";
item1.style.backgroundColor = "#EB614A";
const item2 = document.createElement('div');
item2.className = 'item';
item2.innerText = '2';
item2.style.order = '3';
item2.style.flex = "1 1 33.333%";
item2.style.backgroundColor = "#4983B2";
const item3 = document.createElement('div');
item3.className = 'item';
item3.innerText = '3';
item3.style.order = '2';
item3.style.flex = "1 1 33.333%";
item3.style.backgroundColor = "#663797";
const item4 = document.createElement('div');
item4.className = 'item';
item4.innerText = '4';
item4.style.order = '4';
item4.style.flex = "1 1 33.333%";
item4.style.backgroundColor = "#408016";
const item5 = document.createElement('div');
item5.className = 'item';
item5.innerText = '5';
item5.style.order = '1';
item5.style.flex = "0 1 50%";
item5.style.backgroundColor = "#F3A333";

h1.after(holder);
holder.append(item1, item2, item3, item4, item5);

let itemCollection = document.getElementsByClassName("item");
let itemCollectionArray = Array.from(itemCollection);
itemCollectionArray.forEach((el) => {
   el.style.padding = "15px 0";
   el.style.textAlign = "center";
});