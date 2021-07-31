function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var lista = [];

function onClickButtonAddValue(val) {
  if (val != false) {
    // agregarlo al array
    val = Number(val);
    lista.push(val);
    console.log(lista);
    // recargar listado html
    addtoHtmlList(val);
    // calcular la mediana
    calcularMediana(lista);

    // limpia input
    input = document.getElementById('inputValue');
    input.value = '';
  }
}

const htmlList = document.getElementById('arrayValues');
const medianaHtml = document.getElementById(
  'medianaCalculada'
);
// function addtoHtmlList() {
// for (var i = 0; i < lista.length; i++) {
//   var el = '<li>' + lista[i] + '</li>';
//   htmlList.insertAdjacentHTML('beforeend', el);
// }}

function addtoHtmlList(value) {
  var el = '<li>' + value + '</li>';
  htmlList.insertAdjacentHTML('beforeend', el);
}

function onClickButtonVaciarArray() {
  // vacia el array
  lista = [];
  // vacia el listado html
  htmlList.innerHTML = '';
  medianaHtml.innerText = '';
}

let mediana;

function calcularMediana(lista) {
  const mitadLista = parseInt(lista.length / 2);
  console.log('mitadLista ' + mitadLista);
  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    console.log('elem 1: ' + elemento1);
    const elemento2 = lista[mitadLista];
    console.log('elem 2: ' + elemento2);

    const promedioEl1yEl2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    console.log('promedio: ' + promedioEl1yEl2);
    mediana = promedioEl1yEl2;
  } else {
    mediana = lista[mitadLista];
  }

  medianaHtml.innerText = mediana;
}
