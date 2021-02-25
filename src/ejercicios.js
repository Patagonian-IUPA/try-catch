const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  Utils.disableAll();
  const id = prompt("ID a leer:");
  let data = null;

  try {
    data = db.read(id);
  } catch (err) {
    let strTipoError;

    if (err instanceof DBError) {
      strTipoError = "Base de Datos";
    } else {
      strTipoError = "Sistema";
    }

    console.error(err);
    throw new Error(`Error de ${strTipoError}: ${err.message}`);
  } finally {
    Utils.enableAll();
  }

  return data;
}

function btnConectar() {
  Utils.disableAll();

  try {
    db.connect();
    alert("INFO: BD conectada");
  } catch (err) {
    console.error(err);
    alert(`Error de Base de Datos: ${err.message}`);
  } finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  Utils.disableAll();
  const id = prompt("Nuevo ID:");
  const dato = prompt("Nuevo Dato:");
  try {
    db.save(id, dato);
    alert(`INFO: Nuevo dato cargado (${id}, ${dato})`);
  } catch (err) {
    let strTipoError;

    if (err instanceof DBError) {
      strTipoError = "Base de Datos";
    } else {
      strTipoError = "Sistema";
    }

    console.error(err);
    alert(`Error de ${strTipoError}: ${err.message}`);
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  try {
    const data = leerDesdeDB();
    alert(`INFO: Dato recuperado (${data})`);
    console.info("Resultado:", data);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

function btnDesconectar() {
  Utils.disableAll();
  try {
    db.close();
    alert("INFO: BD desconectada");
  } catch (err) {
    console.error(err);
    alert(`Error de Base de Datos: ${err.message}`);
  } finally {
    Utils.enableAll();
  }
}
