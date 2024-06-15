import { Tecnico, Pc, OrdenDeServicio } from "../model/ordenDeServicio";


const dataServicios = {
    tecnicos: [ new Tecnico('Andres', 'Portatiles'),
                new Tecnico('Camilo', 'Escritorio'),
                new Tecnico('Daniela', 'Portatiles'),
                new Tecnico('Martha', 'Escritorio')],

    computadores: [ new Pc('Dell', 'Optimus 2030', 'Portatil', 16, 'Intel Core i5'),
                    new Pc('HP', 'Pavilion DM4', 'Portatil', 8, 'AMD Ryzen 5'),
                    new Pc('Asus', 'KL-2050', 'Escritorio', 32, 'AMD Ryzen 9')],

    ordenes:
    [ new OrdenDeServicio( new Date(), new Date(), this.computadores[0], 'Prende y se apaga', 'Revisar partes', this.tecnicos[0], false),
      new OrdenDeServicio( new Date(), new Date(), this.computadores[2], 'Esta muy lento', 'Mirar disco y formatear', this.tecnicos[3], false),
      new OrdenDeServicio( new Date(), new Date(), this.computadores[1], 'No da imagen', 'Revisar ram, disco y Bios', this.tecnicos[2], false)]
}


//metodos de Equipos registrados
const getPc = () =>{
    throw new Error('Not Implemente');
}

const editPc = (idPc) => {
    throw new Error('Not Implemente');
}

const addPc = (newPC) => {
    if(!newPC) throw new Error('Not Implemente');
    dataServicios.computadores.push(newPC);
}



//Metodos de ordenes de servicio
const getOrdenes = () => {
    throw new Error('Not Implemente');
}

const addOrden = (newOrden) => {
    throw new Error('Not Implemente');
}

const editOrden = (idOrden) => {
    throw new Error('Not Implemente');
}

const toggleOrden = (idOrden) => {
    throw new Error('Not Implemente');
}


