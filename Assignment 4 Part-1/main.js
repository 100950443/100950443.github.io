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