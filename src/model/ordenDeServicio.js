

export class OrdenDeServicio {

    constructor(fechaIng, fechaSal, pc, diagnostico, tipoTrabajo, tecnico){
        this.codigo = 1;
        this.fechaIng = fechaIng;
        this.fechaSal = fechaSal;
        this.pc = pc;
        this.diagnostico = diagnostico;
        this.tipoTrabajo = tipoTrabajo;
        this.tecnico = tecnico;
        this.estado = false;
    }
}