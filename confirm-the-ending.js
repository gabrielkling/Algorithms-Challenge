function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var name = str.split(" ");
  var test = name[name.length-1];
  if(test == target) return true;
  else if(test[test.length-1] == target) return true;
  else if(test.indexOf(target) > -1 && target.length > 1) return true;
  return false;
}

confirmEnding("Bastian", "n");
