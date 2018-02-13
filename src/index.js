module.exports = function multiply(first, second) {
  function reverse (string) { // создает реверсивные массивы из входных чисел
    var rArr = string.split("").reverse();
    return rArr;
  };
  function length (arr1, arr2) { // приводит массивы к одной длинне забивая в пустые ячейки нули
    if (arr1.length > arr2.length) {
      for (var i = arr2.length; i < arr1.length; i++) {
        arr2[i] = 0;};
      } else {
        if (arr1.length < arr2.length) {
          for (i = arr1.length; i < arr2.length; i++) {
            arr1[i] = 0;
          };
        };
      };
    };
  function mult(arr1, arr2) { // умножение столбиком
    var res = [];
    for (var i = 0; i < (arr1.length*2); i++) {
      res[i] = 0;
    };
    for (i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        res[i+j] += arr1[i] * arr2[j];
      };
    };
    return res;
  };
  function result (res) { // суммирование  и вывод результата
    for (var i = 0; i < res.length; i++) {
        while (res[i] >= 10) {
          res[i+1] += Math.floor(res[i]/10);
          res[i] %= 10;
      };
    };
    res.reverse()
    while (res[0] == 0) {
      res.splice(0, 1);
    }
    return res.join("");
  };
  var first = reverse(first),
  second = reverse(second);
  length(first, second);
  return res = result(mult(first,second));
};
