const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  } catch (err) {
    console.info(err);
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

function btnConectar() {
} try {
  Utils.disableAll();
  db.connect();
} catch {
  console.info(err);
  alert(`Error al Conectar!\n\n\t${err.message}`);
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
  } catch (err) {
    console.info(err);
    alert(`Error al cargar!\n\n\t${err.message}`);
  } finally {
    Utils.enableAll();

    function btnDesconectar() {
    } try {
      Utils.disableAll();
      db.close();
    } catch {
      console.info(err);
      alert(`Error al desconectar!\n\n\t${err.message}`);
    } finally { }
    Utils.enableAll();
  }
}