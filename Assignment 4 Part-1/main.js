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


