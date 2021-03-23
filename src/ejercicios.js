const db = new BaseDatos();


console.info('Hola');

function leerDesdeDB() {
  try {
    Utils.disableAll();
    db.connect();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    alert(`ID: ${id} \n\n\t Resultado: ${data}`)
    return data;
  } catch (error) {
    console.error(`Error! \n\n\t ${error}`);
    alert(`Error! \n\n\t ${error}`)
  } finally {
    Utils.enableAll();
    if (db._connected) {
      db.close();
    }
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
    alert('Conectado a la Base de datos')
  } catch (error) {
    console.error(`Error! \n\n\t ${error}`);
    alert(`Error! \n\n\t ${error}`)
  } finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  try {
    Utils.disableAll();
    db.connect();
    const id = prompt('Nuevo ID:');
    const dato = prompt('Nuevo Dato:');
    db.save(id, dato);
    alert (`Dato guardado correctamete \n\t ID: ${id} \n\t Dato: ${dato}`);
  } catch (error) {
    console.error(`Error! \n\n\t ${error}`);
    alert(`Error! \n\n\t ${error}`)
  } finally {
    Utils.enableAll();
    if (db._connected) {
      db.close();
    }
  }
}

function btnDesconectar() {
  try {
    Utils.disableAll();
    db.close();
    alert('Desconectado de la Base de datos')
  } catch (error) {
    console.error(`Error! \n\n\t ${error}`);
    alert(`Error! \n\n\t ${error}`)
  }
  finally {
    Utils.enableAll();
  }
}
