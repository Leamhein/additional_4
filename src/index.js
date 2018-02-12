module.exports = function multiply(first, second) {
  function Reverse (array) {
   var arr = array.split('');
   return arr.reverse();
  };
  function Multiplication (first, second) {
    var revResult = [],
    length = 0;
    if (first.length > second.length) {
      length = first.length;
      revResult = first;
    } else {
      length = second.length;
      revResult = second;
    };
    for (var i = 0; i < length; i++) {
      while (typeOf(first[i]) !== undefined || typeOf(second[i]) !== undefined) {
        if (first[i] * second[i] > 9) {

        }
      }
    }
  };
};
module.exports(1,2);
