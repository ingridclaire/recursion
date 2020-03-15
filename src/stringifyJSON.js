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
      if(obj.length === 1) {
        if(typeof obj[0] === 'string') {
            return '"' + obj[0] + '"]'
        } else if(typeof obj[0] === 'number') {
            return obj[0].toString() + ']'
        }
      } else if(obj[1] === 'object' && !Array.isArray(obj[1])) {
        return stringifyJSON(obj.shift()) + '{' + stringifyJSON(obj);
      } else if(Array.isArray(obj[1])) {
        return stringifyJSON(obj.shift()) + ',[' + stringifyJSON(obj);
      } else {
        return stringifyJSON(obj.shift()) + ',' + stringifyJSON(obj);;
      }
      
  } else if(typeof obj === 'object' && !Array.isArray(obj)) {
      let keys = Object.keys(obj)
      let firstKey = '"' + keys[0] + '":'
      let firstProp = obj[keys[0]];
      delete obj[keys[0]]
      if(keys.length === 1) {
        if(typeof firstProp === 'string') {
          return firstKey + '"' + firstProp + '"}';
        } else if(typeof firstProp === 'number') {
          return firstKey + firstProp.toString() + '"}'
        } else {
          return firstKey + stringifyJSON(firstProp) + '}';
        }
      }
      return firstKey + firstProp + ',' + stringifyJSON(obj);
    
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