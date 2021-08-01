const lista1Count = {};

function calcularModa(lista) {
  lista.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista1Count).sort(
    function (a, b) {
      return a[1] - b[1];
    }
  );

  const moda = lista1Array[lista1Array.length - 1];
  return moda;
}

function onClickButtonAddValue(val) {
  if (val != false) {
    // agregarlo al array
    val = Number(val);
    lista.push(val);
    lista.sort(compareNumbers);
    // recargar listado html
    addtoHtmlList();
    // calcular la mediana
    calcularModa(lista);

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

function addtoHtmlList() {
  htmlList.innerHTML = '';
  for (var i = 0; i < lista.length; i++) {
    var value = lista[i];
    var el = '<li>' + value + '</li>';
    htmlList.insertAdjacentHTML('beforeend', el);
  }
}

function onClickButtonVaciarArray() {
  // vacia el array
  lista = [];
  // vacia el listado html
  htmlList.innerHTML = '';
  medianaHtml.innerText = '';
}
