/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal = {};
animal.species = "monkey";
animal["name"] = "George";
animal.noises = [];
//console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
noises = [];
noises[0] = "oooh";
noises.push("aaah");
noises.unshift("eeeh");
noises[noises.length] = "uuuh";
//console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push("shhh");
//console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    A/: dot and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *    A/: bracket notation and Array functions
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
animals = [];
animals.push(animal);
let duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);

let dog = { 
  species: 'dog', 
  name: 'Larry', 
  noises: ['rrrrr', 'howl']
};

let turtle = { 
  species: 'teenage mutant ninja turtle', 
  name: 'Leo', 
  noises: ['hiya', 'cowabunga']
};

animals.push(dog, turtle);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// friends is an array to match the animals array
friends = [];

function getRandom(array) {
  let randomIndex = Math.floor(Math.random() * (array.length - 1));
  return randomIndex;
}

friends.push(animals[getRandom(animals)].name);
//console.log(friends);

animals[getRandom(animals)].friends = friends;
//console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}