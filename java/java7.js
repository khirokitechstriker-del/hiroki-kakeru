'use strict';

console.log('Hello World!!');

const servants = ['犬', '猿', '雉'];

function swapServants(newcomer) {
  servants.push(newcomer);
  const fired = servants.shift();
   console.log('現在の家来は：');
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢 ${servants.length} 名です。`);
}

swapServants('鬼');
console.log('犬さん、これまでありがとう！');

swapServants('桃');
console.log('猿さん、これまでありがとう！');

const retired = swapServants('鬼');
console.log(`${retired}さん、これまでありがとう！`);
console.log(`${swapServants('桃')}さん、これまでありがとう！`);

const array = [1, 2, 3];
const newArray = array.map((el) => {
  const squared = el * el;
  return squared;
});