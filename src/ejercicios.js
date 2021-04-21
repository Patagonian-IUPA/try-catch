const db = new BaseDatos();
//db.connect();

console.info('Hola, conectar BD');

function leerDesdeDB() {
  try{
  Utils.disableAll();
  const id = prompt('ID a leer:');
  const data = db.read(id);
  Utils.enableAll();
  return data;
}
  catch(err){
    alert(`Error!\n\n\t${err.message}`);
    return null;
  }
  finally{
     Utils.enableAll();
  }
}

function btnLeer() {
  const data = leerDesdeDB();
  console.info('Resultado:', data);
}
//---------------------------//


 function btnConectar() {
  try{
   Utils.disableAll();
  
  db.connect();
   Utils.enableAll();
 }
 catch(error){
  alert('Error en la conexion a la BD', error);
 }
 finally{

   Utils.enableAll();
    
}
 }

 function btnCargar() {
  try{
   Utils.disableAll();
   const id = prompt('Nuevo ID:');
   const dato = prompt('Nuevo Dato:');
   db.save(id, dato);
   Utils.enableAll();
 }
 catch(err){
    alert(`Error al cargar!\n\n\t${err.message}`);
    
 }
 finally{
    Utils.enableAll();
 }
 }

 function btnDesconectar() {
   Utils.disableAll();
   db.close();
   Utils.enableAll();
 }
