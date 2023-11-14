import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Module({
  imports: [VehiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
