// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA === true && valorB === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  let multi = ((base * height) / 2);

  return multi;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');

  return resultado;
}

// Desafio 4
function concatName(nomes) {
  let resultado = (`${nomes[nomes.length - 1]}, ${nomes[0]}`);
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantWins = wins * 3;
  let quantTies = ties * 1;

  let resultado = quantWins + quantTies;

  return resultado;
}

// Desafio 6
function highestCount(numeroMaior) {
  let numero = Math.max.apply(null, numeroMaior);
  let resultado = 0;

  for (let index = 0; index < numeroMaior.length; index++) {
    if (numero === numeroMaior[index]) {
      resultado++;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let caso1 = Math.abs(mouse - cat1);
  let caso2 = Math.abs(mouse - cat2);
  if (caso1 < caso2) {
    var resultado = 'cat1';
  } else if (caso2 < caso1) {
    var resultado = 'cat2';
  } else if (caso1 === caso2) {
    var resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let fizz = [];

  for (let index = 0; index < array.length; index++) {
    fizz[index] = 'bug!';
    if (array[index] % 15 === 0) {
      fizz[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      fizz[index] = 'buzz';
    } else if (array[index] % 3 === 0) {
      fizz[index] = 'fizz';
    }
  }

  return fizz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
