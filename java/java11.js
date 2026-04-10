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
document.addEventListener('DOMContentLoaded', () => {
  img.src = list[0];  
  });

let imgN = 0; 
rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
      imgN = list.length - 1;
     }
  img.src = list[imgN];
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
      }
  img.src = list[imgN];
});

const p = document.createElement('p');
p.style.color = 'lightgray';

const div = document.getElementById('photo');
div.insertBefore(p, img.nextElementSibling);

document.addEventListener('DOMContentLoaded', () => {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
});

leftArrow.addEventListener('click', () => {
  imgN -= 1;
  if (imgN < 0) {
    imgN = 0;
  }
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
});

rightArrow.addEventListener('click', () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
});

function setImage() {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

let count = 0;
document.body.style.color = 'white';

setInterval(() => {
  document.body.textContent = count;
  count += 1;
}, 1000);

const countID = setInterval(() => {
  document.body.textContent = count;
  count += 1;
  if (count > 5) {
    clearInterval(countID);
     document.body.textContent += ' stopped!!';
  }
}, 1000);

const playButton = document.createElement('button');
playButton.textContent = '自動再生する';
div.appendChild(playButton);

playButton.addEventListener('click', () => {
  setInterval(() => {
    imgN += 1;
    setImage();
  }, 500);
});

playButton.addEventListener('click', () => {
  const autoplay = setInterval(() => {
     imgN += 1;
    if (imgN >= list.length) {
      imgN = 0;
    }
    setImage();
  }, 500);
});

const stopButton = document.createElement('button');
stopButton.textContent = '停止する';
div.appendChild(stopButton);

stopButton.addEventListener('click', () => {
  clearInterval(autoplay);
});

let autoplay = false;
playButton.addEventListener('click', () => {
   if (autoplay == false) {
    playButton.textContent = '無効';  // ボタンの表示を変更
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