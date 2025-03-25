const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was -1000 fahrenheit outside, so :insertx: desperatley needed to leave Earth. When they were getting ready to head to :inserty:, they randomly :insertz:. Soon after, they came across The Beatles who asked :insertx: for money. :insertx: doesn't have any, but they offered their 1,000,000 pounds of apples that they thought of bringing. The Beatles gratefully accepted and they become best friends for ever. The end.";

const insertX = ["Your mom", "Sponge Bob Square Pants", "Michelle Obama"]; //people
const insertY = ["an alternate dimension", "Pluto", "the matrix"]; ///place
const insertZ = ["began hacky-sacking", "started throwing up violently", "got sprayed by a skunk"]; //action

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(1000000);
    const temperature =  Math.round(-1000);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

function randomValueFromArray(array) 
{
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    let newStory = storyText; 
    

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);


    
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (customName.value !== "") 
    {
        let name = customName.value;

        newStory = newStory.replaceAll("The Beatles", name);
    }

    if (document.getElementById("uk").checked) 
    {
        let weight = Math.round(1000000 / 14) + " stone"; 
        let temperature = Math.round((5 / 9) * (-1000 - 32)) + " centigrade";

        newStory = newStory.replace("1,000,000 pounds", weight);

        newStory = newStory.replace("-1000 fahrenheit", temperature);
    }

    story.textContent = newStory; 

    story.style.visibility = "visible"; 
}
