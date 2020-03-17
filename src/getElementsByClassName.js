// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var elementChildren = Array.prototype.slice.call(this.childNodes)
  var childrenWithClass = elementChildren.filter(child => {
    child.classList.contains(className)
  })

  var classArray = Array.prototype.slice.call(elementChildren.classList)

  if(!this.hasChildNodes()) {
    return [];

  } else {
      return childrenWithClass.concat(elementChildren.map(child => {
        child.getElementsByClassName(className);
      }));
  }

};
