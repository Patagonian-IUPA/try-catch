const db = new BaseDatos();
db.connect();

console.info('Hola');

function leerDesdeDB() {
  Utils.disableAll();
  const id = prompt('ID a leer:');
  const data = db.read(id);
  Utils.enableAll();
  return data;
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

// function btnCargar() {
//   Utils.disableAll();
//   const id = prompt('Nuevo ID:');
//   const dato = prompt('Nuevo Dato:');
//   db.save(id, dato);
//   Utils.enableAll();
// }

// function btnDesconectar() {
//   Utils.disableAll();
//   db.close();
//   Utils.enableAll();
// }
