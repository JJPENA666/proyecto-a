import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Detalle } from './interfaces/vehiculo';

@Injectable()
export class VehiculoService {

    private placa: Detalle [] = [
        {id: 1, matricula: 'IOR-569' },
        {id: 2, matricula: 'IOR-564' },
        {id: 3, matricula: 'IOR-563' }

    ];

    
    /*getallvehiculos(){
        const make = [
           'Toyota','Mercedes','Audi' 
        ]
        return make
    }*/

    getAll(){
        return this.placa;
    }

    getById(@Param('id') id: number){
        let restrincion = this.placa.find(placas => placas.id === id);
            if(!restrincion)
            throw new NotFoundException("No existe el id")  
        return restrincion;

    }
}
