const db = new BaseDatos();

try {
  db.connect();
} catch (error) {
  alert(error);
}

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt("ID a leer:");
    const data = db.read(id);
    return data;
  } catch (error) {
    alert(error);
    return null;
  } finally {
    Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info("Resultado:", data);
  data && alert(`Resultado: ${data}`);
}

function btnConectar() {
  try {
    Utils.disableAll();
    db.connect();
    alert("DB conectada");
  } catch (error) {
    alert(error);
  } finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  try {
    Utils.disableAll();
    const id = prompt("Nuevo ID:");
    const dato = prompt("Nuevo Dato:");
    db.save(id, dato);
    alert("Dato cargado correctamente");
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
    alert("DB desconectada");
  } catch (error) {
    alert(error);
  } finally {
    Utils.enableAll();
  }
}
