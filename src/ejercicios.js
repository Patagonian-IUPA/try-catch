const db = new BaseDatos();
// para prueba de no conectado
if (new Date().getTime()%2){
db.connect();}


function leerDesdeDB() {
  try{
  Utils.disableAll();
  const id = prompt('ID a leer:');
  const data = db.read(id);
  Utils.enableAll();
  return data;}
  catch(err){
    // error
    //alert('Error- Vuelva a  ingresar el ID a leer');
    alert(`Error- Vuelva a  ingresar el ID a leer!\n\n\t${err.message}`);
    console.warn('Error- Vuelva a  ingresar el ID a leer',err);
    //se vuelve a habilitar el boton
   // Utils.enableAll();
    return null;
  }finally{Utils.enableAll();}
}

function btnLeer() {
  try{
  const data = leerDesdeDB();
  console.info('Resultado:', data);}
  catch(err){  alert('Error al leer desde DB');
  alert(`Error al leer desde DB\n\n\t${err.message}`);

  console.warn('Error al leer desde DB',err);}}

function btnConectar() {
  try{
  Utils.disableAll();
     db.connect();
    //Utils.enableAll();
  }
  catch(err){  alert('Error al conectar');
  alert(`Error al conectar\n\n\t${err.message}`);
  
  console.warn('Error al conectar',err);}
finally{Utils.enableAll();}}


 function btnCargar() {

 try{
  Uils.disableAll();
   const id = prompt('Nuevo ID:');
   const dato = prompt('Nuevo Dato:');
   db.save(id, dato);  
 }
 catch(err){
   alert(`Error al cargar!\n\n\t${err.message}`)
   console.warn('Error al cargar',err);
 } finally
 {Utils.enableAll();}
 }

 function btnDesconectar() {
  try{
   Utils.disableAll();
   db.close();
 }
catch(err){
  alert(`Error al Desconectar\n\n\t${err.message}`)
  console.warn('Error al Desconectar',err);
} finally
{Utils.enableAll();}
}
