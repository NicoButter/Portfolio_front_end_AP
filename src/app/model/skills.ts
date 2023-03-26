export class Skills {
   
    id: number;
    nombre: string;
    porcentaje: number;
    img :string;

    constructor(nombre: string, porcentanje: number, img: string){
        this.nombre = nombre;
        this.porcentaje = porcentanje;
        this.img = img;
    }

}
