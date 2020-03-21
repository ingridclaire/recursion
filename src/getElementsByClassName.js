// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
var nodes = [];
node = node || document.body;
var parts = node.className.split(' ');
if( parts.indexOf( className ) >= 0) {
  nodes.push(node);
}
for(var i = 0; i < node.children.length; i++) {
  var childResults = getElementsByClassName(className, node.children[i]);
  nodes = nodes.concat(childResults);
}
return nodes;

};
