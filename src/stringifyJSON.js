// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var animals = [{Luna: {species: 'dog', favoriteFood: 'bacon'}}, {George: {species: 'cat', favoriteFood: 'tuna'}}]
//var numbers = [1, 2, 3]
var stringifyJSON = function(obj) {
	if(obj === null) {
		return 'null';

	} else if(typeof obj === 'string') {
        return '"' + obj + '"'

    } else if(typeof obj === 'number') {
		return obj.toString();
	}

	if(Array.isArray(obj)) {
		if(obj.length === 1 && typeof obj[0] === 'number') {
			return '' + obj[0] + ']';

		} else if(obj.length === 1 && typeof obj[0] === 'string') {
            return '"' + obj[0] + '"' + ']';

        }
       return '' + stringifyJSON(obj[0]) + ',' + stringifyJSON(obj.slice(1, obj.length));
    }


  if(typeof obj === 'object' && !Array.isArray(obj)) {
    for(var key in obj) {
      var keys = Object.keys(obj)

      if(keys.length === 1 && typeof obj[key] === 'string') {
        return '"' + keys[0] + '":"' + obj[key] + '"}';

      } else if(keys.length === 1 && typeof obj[key] === 'number') {
        return '"' + keys[0] + '":' + obj[key] + '}';
      }

      let firstKey = keys[0];
      let firstProp = obj[firstKey];
      delete obj[firstKey];

      return '"' + firstKey + '":' + stringifyJSON(firstProp) + ',' + stringifyJSON(obj);
    }
  }	  
}

/*test cases
var numbers = [1, [2, 3], 4, 5]
var animals = ['Luna', 'George', 'Severus']
var songs = {taylorSwift: "Lover", beyonce: {lemonadeAlbum: ["Lemonade", "anotherSong", "anotherOne"]}}
var rating = {smartNora: 5}

console.log(JSON.stringify(numbers));
[1,[2,3],4,5]

console.log(stringifyJSON(numbers));
1,2,3],4,5]

console.log(JSON.stringify(animals));
["Luna","George","Severus"]

console.log(stringifyJSON(animals));
"Luna","George","Severus"]

console.log(JSON.stringify(songs));
{"taylorSwift":"Lover","beyonce":{"lemonadeAlbum":["Lemonade","anotherSong","anotherOne"]}}

console.log(stringifyJSON(songs));
"taylorSwift":"Lover","beyonce":"lemonadeAlbum":"Lemonade","anotherSong","anotherOne"],undefined,undefined
*/