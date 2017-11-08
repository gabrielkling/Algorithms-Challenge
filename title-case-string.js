/*jshint esversion: 6 */
function titleCase(str) {
  str = str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  return str;
}
titleCase("I'm a little tea pot");

//Explicação da expressão regular:

// Encontrar todos os caracteres que não são whitespace (\S)
// No início da string (^)
// Ou depois de qualquer espaço (\s)
// O modificador g busca por outra palavra como essa na string inteira e a substitui.
