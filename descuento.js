const precioOriginal = 432;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =
    (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

// Cupones de descuento
const coupons = [
  {
    name: '15% OFF',
    discount: 15,
  },
  {
    name: '30% OFF',
    discount: 30,
  },
  {
    name: '25% OFF',
    discount: 25,
  },
];
var select = document.getElementById('couponOptions');
for (var i = 0; i < coupons.length; i++) {
  var opt = coupons[i].name;
  var el = document.createElement('option');
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('inputPrice');
  const priceValue = Number(inputPrice.value);

  const inputDiscount =
    document.getElementById('inputDiscount');
  const discountValue = Number(inputDiscount.value);

  const couponValue =
    document.getElementById('couponOptions').value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    const descuento = discountValue;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );
    const resultP = document.getElementById('ResultP');
    resultP.innerText =
      'El precio con descuento es $' + precioConDescuento;
  } else {
    const descuento1 = discountValue;
    const descuento2 = userCoupon.discount;
    const descuento = descuento1 + descuento2;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );
    const resultP = document.getElementById('ResultP');
    resultP.innerText =
      'El precio con descuento es $' + precioConDescuento;
  }
}
