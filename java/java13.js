'use strict';

const storage = localStorage;

const input = document.querySelector('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');
const remove = document.getElementById('remove');

const ul = document.createElement('ul');
output.appendChild(ul);

const link = document.createElement('button');
link.textContent = '別ページへ飛ぶ';
document.body.insertBefore(link, remove);

let listItems = [];

document.addEventListener('DOMContentLoaded', () => {
  if (storage.store != undefined) {
    listItems = JSON.parse(storage.store);
  }

  for (const item of listItems) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
});

link.addEventListener('click', () => {
  location.href = 'page13.html';
});

submit.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);

  listItems.push(input.value);
  storage.store = JSON.stringify(listItems);

  input.value = '';
});

remove.addEventListener('click', () => {
  delete storage.store;
  ul.textContent = '';
  listItems = [];
});
