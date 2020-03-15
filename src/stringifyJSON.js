// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var animals = [{Luna: {species: 'dog', favoriteFood: 'bacon'}}, {George: {species: 'cat', favoriteFood: 'tuna'}}]
//var numbers = [1, 2, 3]
var stringifyJSON = function(obj) {
  if(obj === null) {
    return 'null';

  } else if(typeof obj === 'string') {
    return '"' + obj + '"';

  } else if(typeof obj === 'number') {
    return obj.toString();


  } else if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return ']';

    } else if(obj.length === 1) {
      return stringifyJSON(obj.shift()).concat(stringifyJSON(obj));

    } else {
      return ''.concat(stringifyJSON(obj.shift()), ',', stringifyJSON(obj));
    }


  } else if(typeof obj === 'object' && !Array.isArray(obj)) {
    let keys = Object.keys(obj)
    let firstKey = '"' + keys[0] + '":'
    let firstProp = stringifyJSON(obj[keys[0]]);
    
    delete obj[keys[0]]

    if (keys.length === 0) {
      return '}';

    } else if(keys.length === 1) {
      return firstKey.concat(firstProp, stringifyJSON(obj));

    } else {
      return firstKey.concat(firstProp, stringifyJSON(obj), ',');
    }
  }
}


//test cases
/*var numbers = [1, [2, 3], 4, 5]
var animals = ['Luna', 'George', 'Severus']
var songs = {taylorSwift: "Lover", beyonce: {lemonadeAlbum: ["Lemonade", "anotherSong", "anotherOne"]}}
var rating = {smartNora: 5, dyson: {upright: 4, stick: 5}};

console.log(JSON.stringify(numbers));
// [1,[2,3],4,5]
console.log('-------')
console.log(stringifyJSON(numbers));
// 1,2,3],4,5]
console.log('-------')
console.log(JSON.stringify(animals));
// ["Luna","George","Severus"]
console.log('-------')
console.log(stringifyJSON(animals));
// "Luna","George","Severus"]
console.log('-------')
console.log(JSON.stringify(songs));
// {"taylorSwift":"Lover","beyonce":{"lemonadeAlbum":["Lemonade","anotherSong","anotherOne"]}}
console.log('-------')
console.log(stringifyJSON(songs));
// "taylorSwift":"Lover","beyonce":"lemonadeAlbum":"Lemonade","anotherSong","anotherOne"],undefined,undefined
console.log(JSON.stringify(rating));
console.log('-------')
console.log(stringifyJSON(rating));
*/