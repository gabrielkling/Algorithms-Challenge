function largestOfFour(arr) {
  // You can do this!
  var test = [0, 0, 0, 0];
  for(var i = 0; i < arr.length; i++){
    var cont = arr[i];
    cont.sort(function(a, b){return a-b;});
    test[i] = cont[cont.length-1];
  }
  return test;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
