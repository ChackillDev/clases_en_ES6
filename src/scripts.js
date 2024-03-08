import Cliente from './cliente.js';
import Impuestos from './impuesto.js';

let impuesto_gral = new Impuestos(5000000, 1500000);
let cliente_gral = new Cliente('Fernanda', impuesto_gral);
let rentaNeta = cliente_gral.calculoDeImpuesto();

console.log ( `La renta neta obtenida es: ${rentaNeta}`);
