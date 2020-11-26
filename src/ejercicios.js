const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  Utils.disableAll();
  let data = null;
  const id = prompt('ID a leer:');
  try{
    const data = db.read(id);
    return data;
  } catch(error){  
      alert(error.message);
      return null
  } finally{
    Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}

function btnConectar() {
  try{
    Utils.disableAll();
    db.connect();
  } catch (error){
    alert('Ya se encuentra conectada la Base de datos');
  }
  finally {
    Utils.enableAll();
  }
}

function btnCargar() {
  Utils.disableAll();
  const id = prompt('Nuevo ID:');
  const dato = prompt('Nuevo Dato:');
  try{ 
    db.save(id, dato);
  } 
  catch(error){
    alert(error.message);
  } 
  finally{
    Utils.enableAll();
  }
}

function btnDesconectar() {
  try{
    Utils.disableAll();
    db.close();
  }
  catch (error){
    alert('Ya se encuentra desconectada la Base de datos');
  }
  finally{
    Utils.enableAll();
  }
}
