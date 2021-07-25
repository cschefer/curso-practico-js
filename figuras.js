// Código del cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(
//   'Los lados del cuadrado miden: ' + ladoCuadrado + 'cm'
// );

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(
//   'El perimetro del cuadrado es: ' +
//     perimetroCuadrado +
//     'cm'
// );

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(
//   'El área del cuadrado es: ' + areaCuadrado + 'cm^2'
// );
console.groupEnd();

// Código del triángulo
console.group('Triángulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   'Los lados del triángulo miden: ' +
//     ladoTriangulo1 +
//     'cm, ' +
//     ladoTriangulo2 +
//     'cm, ' +
//     baseTriangulo +
//     'cm.'
// );

// const alturaTriangulo = 5.5;
// console.log(
//   'La altura del triángulo es de: ' +
//     alturaTriangulo +
//     'cm.'
// );

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log(
//   'El perimetro del triángulo es de: ' +
//     perimetroTriangulo +
//     'cm.'
// );

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 == lado2 && lado1 != base) {
    return Number(
      Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4)
    );
  } else {
    alert('No es un triangulo isósceles.');
    return null;
  }
}

function areaTriangulo(lado1, lado2, base) {
  const altura = alturaTriangulo(lado1, lado2, base);
  return (base * altura) / 2;
}

// console.log(
//   'El area del triángulo es de: ' + areaTriangulo + 'cm.'
// );
console.groupEnd();

// Código del circulo
console.group('Circulo');

// Radio
// const radioCirculo = 4;
// console.log(
//   'El radio del circulo es de: ' + radioCirculo + 'cm.'
// );

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(
//   'El diametro del circulo es de: ' +
//     diametroCirculo +
//     'cm.'
// );

// PI
const PI = Math.PI;
// console.log('PI es de: ' + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// console.log(
//   'El perimetro del circulo es de: ' +
//     perimetroCirculo +
//     'cm.');

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log(
//   'El area del circulo es de: ' + areaCirculo + 'cm^2.'
// );
console.groupEnd();

// Aqui interactuamos con el HTML
// CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = Number(input.value);

  const area = areaCuadrado(value);
  alert(area);
}

/*
 * TRIANGULO
 */

// Perimetro
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById(
    'inputTrianguloLado1'
  );
  const input2 = document.getElementById(
    'inputTrianguloLado2'
  );
  const input3 = document.getElementById(
    'inputTrianguloBase'
  );
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(
    value1,
    value2,
    value3
  );
  alert(perimetro);
}

// Area
function calcularAreaTriangulo() {
  const input1 = document.getElementById(
    'inputTrianguloLado1'
  );
  const input2 = document.getElementById(
    'inputTrianguloLado2'
  );
  const input3 = document.getElementById(
    'inputTrianguloBase'
  );
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);

  const area = areaTriangulo(value1, value2, value3);
  alert(area);
}

// Perimetro

/*
 * CIRCULO
 */

// Perimetro
function calcularPerimetroCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = Number(input.value);

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

// Area
function calcularAreaCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = Number(input.value);

  const area = areaCirculo(value);
  alert(area);
}
