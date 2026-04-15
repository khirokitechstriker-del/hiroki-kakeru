'use strict';

console.log('Hello World!!');

const obj = { a: 'A', b: 'B', c: 'C' };
const prop = 'a';
console.log(obj[prop]);

const ppp = { a: 'A', b: 'B', c: 'C' };

for (const sss in ppp) {
    console.log(sss);
    console.log(ppp[sss]);
}

const profile = {
  name: 'OJK',
  bloodType: 'A',
  servants: ['犬', '猿', '雉'],
  style: { height: 165, weight: 52, waist: 76 }
};
console.log(profile.servants[2]);
console.log(profile.style.height);
for (const servant of profile.servants) {
        console.log(`家来: ${servant}`);}
const myStyle = profile.style;
for (const prop in myStyle) {
  console.log(`${prop} is ${myStyle[prop]}`);}
for (const [prop, val] of Object.entries(profile)) {
  if (prop == 'name' || prop == 'bloodType') {
    console.log(`${prop}は${val}です`);
  }
}

const evList = [
  { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
  { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
  { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
  { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
  { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
  { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
  { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
  { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
];
const nameList = evList.map((ev) => `${ev.name}だぞ`);
for (const n of nameList) {
  console.log(n);}

for (const ev of evList) {
  if (ev.weight > 25) {
    console.log(`${ev.name}（${ev.weight}kg）`);
  }
}

const table = document.querySelector('table');
const tr = document.createElement('tr');
const headers = ['名前', 'タイプ', '体重', '特技'];

for (const h of headers) {
  const th = document.createElement('th');
  th.textContent = h;
  tr.appendChild(th);
}

table.appendChild(tr);

for (const ev of evList) {
  console.log(ev.name);
}

for (const ev of evList) {
  const tr = document.createElement('tr');
for (const prop in ev) {
  const td = document.createElement('td');
  td.textContent = ev[prop];
  td.textContent = ev.name;
  tr.appendChild(td);
}
  table.appendChild(tr);
}


