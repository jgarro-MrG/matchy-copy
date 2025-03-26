/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, nameToSearch) {    
    for (let i = 0; i < animals.length; i++) {
        let thisAnimal = animals[i];
        if (thisAnimal.name === nameToSearch) {
            return thisAnimal;
        }           
    }
    return null; 
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //If an animal with that name exists within the animals Array
    let searchResult = search(animals, name);
    if ( searchResult !== null) {
        //replace it's entire Object with the replacement Object.
        let i = animals.indexOf(searchResult);
        animals[i] = replacement;
    }    
    // Otherwise do nothing.
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    let searchResult = search(animals, name);
    if ( searchResult !== null) {
        let i = animals.indexOf(searchResult);
        animals.splice(i,1);
    }    
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    let name = animal.name;
    let species = animal.species;
    let searchResult = search(animals, name);
    if (name.length > 0 && species.length > 0 && searchResult === null) {
        animals.push(animal);
    }  
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}