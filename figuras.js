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

function areaTriangulo(base, altura) {
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
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
