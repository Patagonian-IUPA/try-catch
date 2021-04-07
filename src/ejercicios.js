const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  Utils.disableAll();
  try {
    const id = prompt("ID a leer:");
    const data = db.read(id);
    Utils.enableAll();
    return data;
  } catch (error) {
    console.error("Danger Danger", error);
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  try {
    const data = leerDesdeDB();
    console.info("Resultado:", data);
  } catch (error) {
    console.error("Danger Danger", error);
  }
}

function btnConectar() {
  Utils.disableAll();
  try {
    db.connect();
    Utils.enableAll();
  } catch (error) {
    console.error("Danger Danger", error);
  } finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  Utils.disableAll();
  try {
    const id = prompt("Nuevo ID:");
    const dato = prompt("Nuevo Dato:");
    db.save(id, dato);
  } catch (error) {
    console.error("Danger Danger", error);
  } finally {
    Utils.enableAll();
  }
}

function btnDesconectar() {
  Utils.disableAll();
  try {
    db.close();
    Utils.enableAll();
  } catch {
    console.error("Danger Danger", error);
  } finally {
    Utils.enableAll();
  }
}
