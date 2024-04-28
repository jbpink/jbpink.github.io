const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText1);

const heading1 = document.querySelector("h1");

function changeText1() {
  heading1.textContent = 'Why did you press me!';
}

const button2 = document.querySelector("#button2");
button2.addEventListener('click', function() {
  button2.style.backgroundColor = 'green';
});

