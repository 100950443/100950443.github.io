/*<!--
Name: Sneh Patel
File: Index.html
Date: 01 August 2024
Description: in this code we are making the image galler */


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
};


// Add event listener for the button to toggle darken/lighten effect


/* Wiring up the Darken/Lighten button */
for (let i = 0; i < imageArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageArray[i]}`);
    newImage.setAttribute('alt', altText[imageArray[i]]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => {
      displayedImage.setAttribute('src', e.target.getAttribute('src'));
      displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
    });
  }

  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });