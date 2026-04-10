'use strict';
const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.querySelector('p');40

console.log(`あなたのBMIは${bmi}です`);
if (bmi > 25) {
  p_element.textContent += '肥満です';
} else if (bmi < 18.5) {
  p_element.textContent = '低体重です';
} else {
  p_element.textContent = '適正体重です';
}

const element = document.getElementById('second');
console.log(element.textContent);

const num = 10;
const strNum = '10';
if (num == strNum)
 { console.log('文字列の10と数値の10は等しい');}
if (bmi >= 18.5) {
    if (bmi < 25) {
        console.log('適正体重です');}}

if (bmi >= 18.5 && bmi < 25) {
  console.log('適正体重です');}


