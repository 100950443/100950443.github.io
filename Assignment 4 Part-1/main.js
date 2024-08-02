/*
Name: Sneh patel
File: Index(6).html
Date: 01 August 2024
/*Description: Generates a silly story when the "Generate random story" button is pressed.*/


// Get the element with the ID
const customName = document.getElementById('customname');
// Get the first element with the class 'randomize' and assign it to variable 'randomize'
const randomize = document.querySelector('.randomize');
// Get the first element with the class 'sotry' and assign it to variable 'story'
const story = document.querySelector('.story');
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
// Story template and arrays for random valuse
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Event Listener for the button
randomize.addEventListener('click', result);
function result() {
// Create a new story each time the button is pressed
    let newStory = storyText;
    
// Get random values from arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
// Replace placeholders with random values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    
// Replace 'Bob' with custom name if provided
    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name);
    }
    
// Convert units if UK is selected
    if(document.getElementById('uk').checked) {
      const weight = Math.round(300 * 0.071429) + ' stone';
      const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace('300 pounds', weight);
      newStory = newStory.replace('94 fahrenheit', temperature);
    }
    
// Display the new story
    story.textContent = newStory;

    story.style.visibility = 'visible'
  }
