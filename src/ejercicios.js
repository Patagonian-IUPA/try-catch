const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  Utils.disableAll();

  try {
    const id = prompt('ID a leer:');
    const data = db.read(id);
    alert(`Datos: ${data}`);
    return data;
  } catch (error) {
    alert(`Error! ${error.message}`);
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}

// function btnConectar() {
//   Utils.disableAll();
//   db.connect();
//   Utils.enableAll();
// }

function btnCargar() {
  Utils.disableAll();

  try {
    const id = prompt('Nuevo ID:');
    const dato = prompt('Nuevo Dato:');
    db.save(id, dato);
  } finally {
    Utils.enableAll();
  }
}

// function btnDesconectar() {
//   Utils.disableAll();
//   db.close();
//   Utils.enableAll();
// }
