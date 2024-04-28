const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: decided to go on an adventure. When they stumbled upon :inserty:, they were astounded to find :insertz:. Bilbo saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ["Frodo the fearless", "Gandalf the Grey", "Legolas the elf"];
const insertY = ["the Mines of Moria", "Rivendell", "the woods of Lothlórien"];
const insertZ = ["a party of dwarves having a feast", "an elf singing tales of ancient days", "a mischievous hobbit stealing a wizard’s hat"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll('Bilbo', name);
    }
  
    if (document.getElementById("uk").checked) {
      const weight = `136 kilograms`;
      const temperature =  `34 celcius`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }