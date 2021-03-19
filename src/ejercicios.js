const db = new BaseDatos();

if (new Date().getTime() % 2) {
  db.connect();
}

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  } catch (err) {
    alert(`Error!\n\n\t${err.message}`);
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
  } catch (err) {
    alert(`Error al cargar!\n\n\t${err.message}`);
  } finally {
    Utils.enableAll();
  }
}

 function btnConectar() {
   Utils.disableAll();
   db.connect();
   Utils.enableAll();
 }

 function btnDesconectar() {
   Utils.disableAll();
   db.close();
   Utils.enableAll();
 }
