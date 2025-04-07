

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
  '1.jpg': 'mountain',
  '2.jpg': 'border collie',
  '3.jpg': 'waves',
  '4.jpg': 'sunset',
  '5.jpg': 'beach'
};

/* Looping through images */
for (let i = 0; i < imageArr.length; i++) {
  const fileName = imageArr[i];
  const alt = altText[fileName];

  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + fileName);
  newImage.setAttribute('alt', alt);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', 'images/' + fileName);
    displayedImage.setAttribute('alt', alt);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const curr = btn.getAttribute('class');
  if (curr === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
  }
});

