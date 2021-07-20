// Código del cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log(
  'Los lados del cuadrado miden: ' + ladoCuadrado + 'cm'
);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(
  'El perimetro del cuadrado es: ' +
    perimetroCuadrado +
    'cm'
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(
  'El área del cuadrado es: ' + areaCuadrado + 'cm^2'
);
console.groupEnd();

// Código del triángulo
console.group('Triángulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  'Los lados del triángulo miden: ' +
    ladoTriangulo1 +
    'cm, ' +
    ladoTriangulo2 +
    'cm, ' +
    baseTriangulo +
    'cm.'
);

const alturaTriangulo = 5.5;
console.log(
  'La altura del triángulo es de: ' +
    alturaTriangulo +
    'cm.'
);

const perimetroTriangulo =
  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
  'El perimetro del triángulo es de: ' +
    perimetroTriangulo +
    'cm.'
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(
  'El area del triángulo es de: ' + areaTriangulo + 'cm.'
);
console.groupEnd();

// Código del circulo
console.group('Circulo');

// Radio
const radioCirculo = 4;
console.log(
  'El radio del circulo es de: ' + radioCirculo + 'cm.'
);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(
  'El diametro del circulo es de: ' +
    diametroCirculo +
    'cm.'
);

// PI
const PI = Math.PI;
console.log('PI es de: ' + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(
  'El perimetro del circulo es de: ' +
    perimetroCirculo +
    'cm.'
);
// Area
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log(
  'El area del circulo es de: ' + areaCirculo + 'cm^2.'
);
console.groupEnd();
