const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
 try {
  Utils.disableAll();
  const id = prompt('ID a leer:');
  const data = db.read(id);
  return data;
 } catch (error) {
  alert(`Error!\n\n ${error.message}`)
   return null;
 } finally{
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
  } catch (error) {
    alert(`Error al cargar!\n\n ${error.message}`)
    return null;
  } finally{
    Utils.enableAll();
  }
  
}

function btnConectar() {
  try {
    Utils.disableAll();
    db.connect();
  } catch (error) {
    alert(`Error al conectar!\n\n ${error.message}`)
    return null;
  } finally{
    Utils.enableAll();
  }
  
}



function btnDesconectar() {
  try {
    Utils.disableAll();
    db.close();
  } catch (error) {
    alert(`Error al desconectar!\n\n ${error.message}`)
    return null;
  } finally{
    Utils.enableAll();
  }
  
}
