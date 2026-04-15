'use strict';

console.log('Hello World!!');

for (let i = 0; i < 5; i += 1) {
  console.log('Hello World!!');}

  for (let num = 1; num <= 10; num += 1) 
    {let str;
     if (num % 2 == 0) 
   {str = '偶数';}      
   else { str = '奇数';}
  console.log(`${num}は${str}です`);}
 for (let cnt = 0; cnt < 3; cnt += 1) {
    const msg = 'ブロック内';
    console.log(msg); // 0 → 1 → 2
    }
  
 for (let num = 1; num <= 10; num += 1) {
  if (num % 3 == 0) {break;}
  console.log(num);}
  console.log('for文から出ました');

 for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) 
    {console.log(data);}

 const element = document.createElement('p');
 element.textContent = 'Hello World!!';
 document.body.appendChild(element);

 const ul = document.getElementById('list');
 for(let i = 1; i <= 5; i += 1) {
  const li = document.createElement('li');
   li.textContent = `子要素${i}号`;
   ul.appendChild(li);
}
