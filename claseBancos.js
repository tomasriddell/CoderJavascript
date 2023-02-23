//Clase de objeto bancos
class banco{
    constructor(nombre, tasa, pie, anos){
        this.nombre = nombre;
        this.tasa = tasa;
        this.pie = pie;
        this.anos = anos;
    }

    cotizar(correo){
        Swal.fire(
            'Cotización enviada',
            `Te enviamos una cotización formal del banco ${this.nombre} al correo ${correo}`,
            'success'
        )
    }
}