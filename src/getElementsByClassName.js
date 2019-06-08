// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body;
  var arr = [];
  function recursion(className, currentElement) {
    var currentClass = currentElement.className;
    if (currentElement.classList && currentClass.includes(className)) {
      arr.push(currentElement);
    }
    if (body.hasChildNodes()) {
      currentElement.childNodes.forEach(function(i) {
        recursion(className, i);
      });

    }
    return arr;
  }
  return recursion(className, body);
};

