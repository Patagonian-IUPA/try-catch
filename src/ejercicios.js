const db = new BaseDatos();
// db.connect(); 

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  } catch(err) {
    alert('Error al acceder a la información del dato ingresado!\n\n' + err.message);
    return null;
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}

function btnCargar() {
  try {
    Utils.disableAll();
    const id = prompt('Nuevo ID:');
    const dato = prompt('Nuevo Dato:');
    db.save(id, dato);
  } catch(err) {
    alert('Error al cargar la información en la base de datos!\n\n' + err);
  } finally {
    Utils.enableAll();
  }
}

function btnConectar() {
  try {
    Utils.disableAll();
    db.connect();
  } catch(err) {
    alert('Error al conectar con la base de datos!\n\n' + err);
  } finally {
    Utils.enableAll();
  }
}

function btnDesconectar() {
  try {
    Utils.disableAll();
    db.close();
  } catch(err) {
    alert('Error al desconectarse de la base de datos!\n\n' + err);
  } finally {
    Utils.enableAll();
  }
}
