function repeatStringNumTimes(str, num) {
  // repeat after me

  if(num <= 0)return "";

  var result = "";

  for(var i = 0; i < num; i++){

    result = result.concat(str);

  }

  return result;
}

repeatStringNumTimes("abc", 3);
