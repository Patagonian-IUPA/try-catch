const db = new BaseDatos();
db.connect();

try {
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
} catch (ex) {
  console.error ('Outer', 'Error. This function does not exist');
}


try {
function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}
} catch (ex) {
   console.error ('Outer', 'Error. This function does not exist');
}


try {
function btnConectar() {
  try {
 Utils.disableAll();
  } catch (err) {
    console.log ('Error. disableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
 db.connect();
 try {
 Utils.enableAll();
  } catch (err) {
   console.log ('Error. enableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
}
} catch (ex) {
  console.error ('Outer', 'Error. This function does not exist');
}


try {
function btnCargar() {
  try {
  Utils.disableAll();
  } catch (err) {
    console.log ('Error. disableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
   const id = prompt('Nuevo ID:');
   const dato = prompt('Nuevo Dato:');
   db.save(id, dato);
   try {
   Utils.enableAll();
  } catch (err) {
    console.log ('Error. enableAll cannot be found in the selected file');
  } finally {
    console.log ('Finally');
  }
}
} catch (ex) {
  console.error ('Outer', 'Error. This function does not exist');
}



try {
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
} catch (ex) {
  console.error ('Outer', 'Error. This functions does not exist');
}