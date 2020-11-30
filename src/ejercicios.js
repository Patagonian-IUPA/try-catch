const db = new BaseDatos();
db.connect();


function leerDesdeDB() {
  try {
  Utils.disableAll();
  } catch (err) {
    console.log ('Error. disableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
  const id = prompt('ID a leer:');
  const data = db.read(id);
  try {
  Utils.enableAll();
  } catch (err) {
    console.log ('Error. enableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
  return data;
}




function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}




function btnConectar() {
  try {
 Utils.disableAll();
 db.connect();
} catch (err) {
  console.log ('Error. disableAll cannot be found in the selected file');
} finally {
  console.log ('Finally');
}
 try {
 Utils.enableAll();
  } catch (err) {
   console.log ('Error. enableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
}




function btnCargar() {
  try {
  Utils.disableAll();
  const id = prompt('Nuevo ID:');
  const dato = prompt('Nuevo Dato:');
  db.save(id, dato);
  } catch (err) {
    console.log ('Error. disableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
  try {
   Utils.enableAll();
  } catch (err) {
    console.log ('Error. enableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
}




function btnDesconectar() {
  try {
   Utils.disableAll();
  } catch (err){
  console.log ('Error. disableAll cannot be found in the selected file');
  }
   db.close();
  try {
   Utils.enableAll();
  } catch (err){
    console.log ('Error. enableAll cannot be found in the selected file');
  }
}
