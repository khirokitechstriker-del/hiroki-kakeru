'use strict';

const list = [
  '../java/images/01.jpg',
  '../java/images/02.jpg',
  '../java/images/03.jpg',
  '../java/images/04.jpg',
  '../java/images/05.jpg',
  '../java/images/06.jpg',
  '../java/images/07.jpg',
  '../java/images/08.jpg',
  '../java/images/09.jpg',
  '../java/images/10.jpg',
];

const img = document.getElementById('main');
const [leftArrow, rightArrow] = document.getElementsByTagName('span');
const div = document.getElementById('photo');

const p = document.createElement('p');
p.style.color = 'lightgray';
div.insertBefore(p, img.nextElementSibling);

let imgN = 0;
let autoplay = false;

function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
  setImage();
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  setImage();
});

rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage();
});

const playButton = document.createElement('button');
playButton.textContent = '自動再生する';
div.appendChild(playButton);

const stopButton = document.createElement('button');
stopButton.textContent = '停止する';
div.appendChild(stopButton);

playButton.addEventListener('click', () => {
  if (autoplay === false) {
    playButton.textContent = '無効';
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(autoplay);
  autoplay = false;
  playButton.textContent = '自動再生する';
});