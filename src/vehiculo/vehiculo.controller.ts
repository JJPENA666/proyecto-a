import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { get } from 'http';
import { VehiculoService } from './vehiculo.service';



@Controller('vehiculo')

export class VehiculoController {

    constructor(private vehiculoService: VehiculoService){

    }
    /*@Get()
    getallvehiculos(){
        const make = [
           'Toyota','Mercedes','Audi' 
        ]
        return make
    }*/
    @Get()
    getAllPlacas(){
        return this.vehiculoService.getAll();
    }
    
    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number){
        return this.vehiculoService.getById(id);
    }

}
