// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// test data type of obj
// obj, array, boolean, number, string

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'number') {
    return obj.toString();

  }

  if (typeof obj === 'undefined') {
    return 'undefined';
  }

  if (typeof obj === 'function') {
    return '{}';
  }

  //an array is [1,2,3,4,5];
  // [string, null, number, boolean];
  //conditonal
  //for each
  //call function which is recurision
  //push return value into new array

  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) {
      return '[]';
    }
    obj.forEach(function(i) {
      result.push(stringifyJSON(i));
    });
    return '[' + result.join(',') + ']';
  }

  // object
  // loop through object
  // access each key-value pair
  // stringify pair
  // add to our empty object
  if (!obj) {
    return 'null';
  }

  var empty = function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

  if (obj) {
    var resultObj = '';
    if (empty(obj)) {
      return '{}';
    }
    for (var key in obj) {
      var k = key;
      var value = obj[key];
      if (obj[key] !== undefined &&  typeof obj[key] !== 'function') {
        resultObj += stringifyJSON(k) + ':' + stringifyJSON(value) + ',';
      }
    }

    return '{' + resultObj.substring(0, resultObj.length - 1) + '}';
  }
};

