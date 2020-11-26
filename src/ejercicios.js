const db = new BaseDatos();
db.connect();

function leerDesdeDB() {
  try {
    Utils.disableAll();
    const id = prompt('ID a leer:');
    const data = db.read(id);
    return data;
  } catch (err) {
    alert(`Fatality  ERROR!!!.\nEstado del error:${err.message}`);
    Utils.enableAll();
    return null;
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
  }catch (err){
    alert(`Error en la conexion: la base YA ESTA CONECTADA.\nEstado del error:${err.message}`)
  }
  Utils.enableAll(); 
  }

function btnCargar() {
  try{
		db._ensureConnected();           //verificamos si la base de datos esta abierta. Atraparemos el error :)
		const id = prompt('Nuevo ID:');
  	if (isNaN(id) || !id) {
    		throw "Fatal error! El ID debe ser un un Nro entero."
		}
  	try{
    	const dato = prompt('Nuevo Dato:');
    	db.save(id, dato);
  	}catch(err2){
      alert(`Fatal error! Debe completar el campo.\nEstado del error:${err2.message}`);
  	}
	}catch(err1){
  	alert(err1+`\nEstado del error:${err1.message}`);
	}
Utils.enableAll();
}

function btnDesconectar() {
  try {
    Utils.disableAll();
    db.close();
  }catch(err){
    alert(`La base ha sido desconectada anteriormente.\nEstado del error ${err.message}`)
  }
  Utils.enableAll();
 }
