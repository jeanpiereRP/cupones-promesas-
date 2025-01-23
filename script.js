let total = 0;

function calcularTotal() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const valor = parseFloat(document.getElementById("valor").value);
  
  return new Promise((resolve, reject) => {
    if (!isNaN(cantidad) && !isNaN(valor) && cantidad > 0 && valor > 0) {
      total = cantidad * valor;
      resolve(total);
    } else {
      reject("Por favor, ingresa valores válidos.");
    }
  })
  .then(total => {
    document.getElementById("resultado").innerText = `Total: $${total.toFixed(2)}`;
  })
  .catch(error => {
    document.getElementById("resultado").innerText = error;
  });
}

function calcularDescuento(porcentaje) {
  if (total > 0) {
    return new Promise((resolve) => {
      const descuento = total * porcentaje;
      const totalConDescuento = total - descuento;
      resolve({ descuento, totalConDescuento });
    })
    .then(({ descuento, totalConDescuento }) => {
      document.getElementById("resultado").innerText = 
        `Total: $${total.toFixed(2)}\n` + 
        `Descuento: $${descuento.toFixed(2)}\n` + 
        `Total con Descuento: $${totalConDescuento.toFixed(2)}`;
    });
  } else {
    document.getElementById("resultado").innerText = "Primero calcula el total.";
  }
}