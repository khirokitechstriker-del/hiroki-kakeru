'use strict';

console.log('Hello World!!');

const array = [1, 2, 3, 4, 5];

const newArray = array.filter((el) => el > 3);
console.log(newArray);

const etoList = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];
const ul = document.getElementById('list');
for (const eto of etoList) {
  const li = document.createElement('li');
  li.textContent = eto;
   ul.appendChild(li);
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8];

const evenList = numList.filter((num) => num % 2 == 0).map((even) => 'No.' + even);

for (const num of evenList) {
  const li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}