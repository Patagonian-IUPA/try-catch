class DBError extends Error { }

class BaseDatos {
  /**
   * @typedef {Object} BaseDatosOptions
   * @property {Number} disconnectInterval
   * Disconnect interval in milliseconds.
   * @property {Number} saveErrorCount
   * Generates an error when saveErrorCount reached.
   *
   * @param {BaseDatosOptions} options
   */
  constructor(options = {}) {
    this._disconnectInterval = options?.disconnectInterval || 0;
    this._saveErrorCount = options?.saveErrorCount || 0;
  }

  connect() {
    this._ensureDisconnected();
    this._connected = true;

    if (this._disconnectInterval) {
      this._interval = setInterval(() => {
        if (this._connected) {
          console.warn('DB desconectada por un error!');
          this._connected = false;
        } else {
          console.info('DB re-conectada!');
          this._connected = true;
        }
      }, this._disconnectInterval);
    }

    console.info('DB conectada');
  }

  close() {
    this._ensureConnected();
    clearInterval(this._interval);
    this._interval = null;
    this._connected = false;
    console.info('DB desconectada');
  }

  save(id, data) {
    this._ensureConnected();
    this._validateId(id);

    if (!data) {
      throw new Error(`"data" es requerido`);
    }

    this._saves++;

    if (this._saveErrorCount && (this._saves % this._saveErrorCount)) {
      throw new DBError('Fallo en la conexión');
    }

    localStorage.setItem(id, JSON.stringify(data));
    console.info('Dato guardado correctamete', id);
  }

  read(id) {
    this._ensureConnected();
    this._validateId(id);

    const data = localStorage.getItem(id);

    if (data === null) {
      throw new DBError(`Registro con id=${id} no encontrado`);
    }

    return JSON.parse(data);
  }

  //#region Private section

  /**
   * @private
   */
  _connected = false;

  /**
   * @private
   */
  _interval = null;

  /**
   * @private
   */
  _saves = 0;


  /**
   * @private
   */
  _disconnectInterval = 0;

  /**
   * @private
   */
  _saveErrorCount = 0;

  /**
   * @private
   */
  _ensureConnected() {
    if (!this._connected) {
      throw new DBError('DB no conectada');
    }
  }

  /**
   * @private
   */
  _ensureDisconnected() {
    if (this._connected) {
      throw new DBError('DB conectada');
    }
  }

  /**
   * @private
   */
  _validateId(id) {
    if (!id || isNaN(id)) {
      throw new Error('"id" debe ser un número');
    }
  }

  //#endregion
}
