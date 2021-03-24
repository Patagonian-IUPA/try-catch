const db = new BaseDatos();
db.connect();

console.info('Hola');

function leerDesdeDB() {
  Utils.disableAll();
  try{
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  }
  catch(e){
    console.error('Error: ',e);
  }
  finally{
    Utils.enableAll();
  }
  
}

function btnLeer() {
  try{
   const data = leerDesdeDB();
    console.info('Resultado:', data);
  }
  catch(e){
    console.error('Error al leer la base de datos',e);
  }
}

function btnConectar() {
  Utils.disableAll();
  try{
    db.connect();
  }
  catch(e){
    console.info(e);
  }
  finally{
    Utils.enableAll();
  }
  
}

function btnCargar() {
  Utils.disableAll();
  try{
    const id = prompt('Nuevo ID:');
    const dato = prompt('Nuevo Dato:');
    db.save(id, dato);
  }
  catch(e){
    console.error(e);
  }
  finally{
    Utils.enableAll();
  }
}

function btnDesconectar() {
  Utils.disableAll();
  try{
    db.close();
  }
  finally{
    Utils.enableAll();
  }
}
