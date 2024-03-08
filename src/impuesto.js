export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get getMontoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    /**
     * @param {any} newBrutoAnual
     */
    set setMontoBrutoAnual(newBrutoAnual) {
        this._montoBrutoAnual = newBrutoAnual;
    }

    get getDeducciones() {
        return this._deducciones;
    }

    /**
     * @param {any} nuevasDeducciones
     */
    set setDeducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }
}
