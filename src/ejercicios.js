const db = new BaseDatos();
db.connect();

console.info('Hola');

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  } catch (error) {
    alert(error);
    return null
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}

function btnConectar() {
  try {
    Utils.disableAll();
    db.connect();
  } catch (error) {
    alert(error);
  } finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  try {
    Utils.disableAll();
    const id = prompt('Nuevo ID:');
    const dato = prompt('Nuevo Dato:');
    db.save(id, dato);
  } catch (error) {
    alert(error);
  } finally {
    Utils.enableAll();
  }
}

function btnDesconectar() {
  try {
    Utils.disableAll();
    db.close();
  } catch (error) {
    alert(error)
  } finally {
    Utils.enableAll();
  }
}
