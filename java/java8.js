'use strict';

console.log('Hello World!!');

const p2 = document.getElementById('dom');
console.log (p2.textContent); 

const lis = document.getElementsByTagName('li');
console.log(lis);

const lisArray = Array.from(lis);
for (const li of lisArray) {
  console.log(li.textContent);
}

lisArray.forEach((li) => li.textContent = 'DOM!!');

const ps = document.getElementsByClassName('explain');
console.log(ps);

const inputs = document.getElementsByName('dom');
console.log(inputs);

const a = document.getElementById('link');
console.log(a);

const p = a.parentElement;
console.log(p);

const img = a.firstElementChild; 
console.log(img);

const ul = document.getElementById('list'); 
const newLi = document.createElement('li');
newLi.textContent = 'DOM!!';
ul.appendChild(newLi); 
const li1 = ul.firstElementChild;
const li2 = li1.nextElementSibling;
ul.insertBefore(newLi, li2);