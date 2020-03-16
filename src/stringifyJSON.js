// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var animals = [{Luna: {species: 'dog', favoriteFood: 'bacon'}}, {George: {species: 'cat', favoriteFood: 'tuna'}}]
//var numbers = [1, 2, 3]
var stringifyJSON = function(obj) {
  if(obj === null) {
    return 'null';

  } if(typeof obj === 'string') {
    return '"' + obj + '"';

  } if(typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();

  // } if(typeof obj === 'function') {
  //   return '';


  } if(Array.isArray(obj)) {
      return '[' + obj.map(element => stringifyJSON(element)) + ']';
  
  } if(typeof obj === 'object' && !Array.isArray(obj)) {
    let keys = Object.keys(obj)
    let objString = ''
    for(var key in obj) {
      if(typeof obj[key] === 'function' ) {
        return '{}';
      }
      if(key === keys[keys.length-1]) {
        objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key])
      } else {
        objString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
      }
    }
    return '{' + objString + '}';
  }
}



// var assertIsEqual = function(expected, actual) {
//   if(expected === actual) {
//     console.log('test passes');
//   } else {
//     console.log('Test failed: Expected ' + actual + 'to be' + expected)
//   }
// }




// //test cases

// var numbers = [1, [2, 3], 4, 5]
// var expected1 = JSON.stringify(numbers)
// var actual1 = stringifyJSON(numbers)
// assertIsEqual(expected1, actual1);

// var animals = ['Luna', 'George', 'Severus']
// var expected2 = JSON.stringify(animals)
// var actual2 = stringifyJSON(animals)
// assertIsEqual(expected2, actual2);

// var songs = {taylorSwift: "Lover", beyonce: {lemonadeAlbum: ["Pray You Catch Me", "Sorry", "Sandcastles"]}, brandiCarlile: 'The Joke'};
// var expected3 = JSON.stringify(songs)
// var actual3 = stringifyJSON(songs)
// assertIsEqual(expected3, actual3);