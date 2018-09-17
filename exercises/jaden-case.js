'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(str){
    return str.split(" ").map(function(mot) {
        return mot.charAt(0).toUpperCase() +mot.slice(1).toLowerCase();
  }).join(" ");
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("bonjour agnes comment tu vas?"), "Bonjour Agnes Comment Tu Vas?") 

// End of tests */
