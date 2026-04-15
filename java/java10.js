'use strict';

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
  const p = document.getElementById('target');
  p.classList.toggle('newStyle');
});

button.addEventListener('mouseenter', () => {
  const p = document.getElementById('target');
  p.style.fontSize = '1.5em';
});

button.addEventListener('mouseleave', () => {
  const p = document.getElementById('target');
  p.style.fontSize = '1em';
});

document.querySelector('img').addEventListener('click', (ev) => {
  const img = ev.currentTarget;  
  img.src = 'https://github.com/ugok-girls.png';
  img.width = 150;
});

window.addEventListener('resize', () => {
  const p = document.getElementById('target');
  p.style.backgroundColor = 'gold';
});

const a = document.createElement('a');
a.href = 'https://zenn.dev/ojk';
a.textContent = 'リンク先に飛びます';
const script = document.querySelector('script');
document.body.insertBefore(a, script);

button.addEventListener('click', () => {
  a.textContent = 'リンク先に飛びません';
  a.addEventListener('click', (ev) => {
    ev.preventDefault();
     });
});

const letPGold = () => {
  const p = document.getElementById('target');
  p.style.backgroundColor = 'gold';
};

button.addEventListener('click', () => {
  window.removeEventListener('resize', letPGold);
  button.disabled = true;
  });

