function reverseString(str) {

  //Separo a string em um vetor de caracteres.
  var str_split = str.split("");
  //Inverto o vetor.
  var str_rev = str_split.reverse();
  //Junto as Partes
  var str_join = str_rev.join("");

  return str_join;
}

reverseString("hello");
