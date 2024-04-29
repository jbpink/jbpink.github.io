const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg',];

/* Declaring the alternative text for each image file */
const altText = ['Java vs JS Meme','I Know HTML Meme','Programming vs Googling Meme','New Programmer Meme','Looming JS Meme',];

/* Looping through images */
let index = 1;
for(image of array){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[index]);
    thumbBar.appendChild(newImage);
    index++;
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */ 
btn.addEventListener('click', () => {
    let button = btn.getAttribute('class');
    if(button === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
    }
});