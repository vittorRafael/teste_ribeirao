//questão 01
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`questao 01: ${soma}`);

//questão 02
function pertence(entrada) {
  let n1 = 0;
  let n2 = 1;

  while (n2 <= entrada) {
    if (n2 === entrada) {
      return true;
    }
    let temp = n2;
    n2 = n1 + n2;
    n1 = temp;
  }

  return false;
}

let entrada = 55;
if (pertence(entrada)) {
  console.log(`questao 02: ${entrada} pertence a sequencia.`);
} else {
  console.log(`questao 02: ${entrada} nao pertence a sequencia.`);
}

//questão 03
console.log(`questao 03:
a) 1, 3, 5, 7, 9
b) 2, 4, 8, 16, 32, 64, 128
c) 0, 1, 4, 9, 16, 25, 36, 49
d) 4, 16, 36, 64, 100
e) 1, 1, 2, 3, 5, 8, 13
f) 2,10, 12, 16, 17, 18, 19, ___`);

//questão 04
console.log(
  `questao 04: Ligaria o primeiro interruptor e manteria ligado. Ligaria o segundo interruptor e após um tempo desligava. Iria a primeira sala, se estivesse ligada, seria o primeiro interruptor, caso estivesse desligada e quente, seria o segundo, caso desligada e fria, seria o terceiro. Após verificar iria em outra sala, sabendo então os qual interruptor ligaria cada lâmpada!`,
);

//questão 05
function reverter(string) {
  let stringRevertida = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringRevertida += string[i];
  }
  console.log(`questao 05: ${stringRevertida}`);
}

let string = 'rafaelsales';
reverter(string);
