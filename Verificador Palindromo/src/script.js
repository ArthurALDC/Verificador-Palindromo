function palindrome() {
  // Remove espaços em branco e caracteres especiais, e converte para letras minúsculas
  var palavra = prompt("Digite uma palavra:");
  str = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');

  var length = str.length;
  for (var i = 0, j = length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}
// Chamar a função para verificar se a palavra digitada pelo usuário é um palíndromo
if (palindrome()) {
  console.log("É um palíndromo!");
} else {
  console.log("Não é um palíndromo!");
}
