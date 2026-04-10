'use strict';

const a = document.getElementById('link');
const img = a.firstElementChild;
console.log(`元のリンクURL: ${a.href}`);
a.href = 'https://loremflickr.com/320/240/dog';
console.log(`元の画像ソース: ${img.src}`);
img.src = 'https://loremflickr.com/320/240/dog';

const p = document.getElementById('p_id');
if (p.classList.contains('p_class') == true) {
  p.classList.remove('p_class');
  p.classList.add('baseStyle', 'myStyle');
}

if (!p.classList.contains('baseStyle'))
    if (true) {
  console.log('絶対に実行される');
}

if (false) {
  console.log('絶対に実行されない');
}
console.log(!true);
console.log(!false);