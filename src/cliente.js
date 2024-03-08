export default class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get getNombre(){
        return this._nombre;
    }

    /**
     * @param {any} nuevoNombre
     */
    set setNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    calculoDeImpuesto() {
        let total = ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21) + this._impuesto.deducciones;
        return total;
    }
}
