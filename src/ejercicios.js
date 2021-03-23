const db = new BaseDatos();
db.connect();

console.info('Hola');

function leerDesdeDB() {
    try {
        Utils.disableAll();
        const id = prompt('ID a leer:');
        const data = db.read(id);
        return data;
    } catch (err) {
        console.error('Error al leer ID', err)
    } finally {
        Utils.enableAll();
    }
}

function btnLeer() {
    try {
        const data = leerDesdeDB();
        console.info('Resultado:', data);
    } catch (err) {
        console.error('Error al leer BD!', err)
    } finally {
        Utils.enableAll();
    }
}

function btnConectar() {
    try {
        Utils.disableAll();
        db.connect();
    } catch (err) {
        console.error('Error al conectar BD!', err)
    } finally {
        Utils.enableAll();
    }
}

function btnCargar() {
    try {
        Utils.disableAll();
        const id = prompt('Nuevo ID:');
        const dato = prompt('Nuevo Dato:');
        db.save(id, dato);
    } catch (err) {
        console.error('Error al guardar', err)
    } finally {
        Utils.enableAll();
    }
}

function btnDesconectar() {
    try {
        Utils.disableAll();
        db.close();
    } catch (err) {
        console.error('Error al desconectar BD', err)
    } finally {
        Utils.enableAll();
    }
}