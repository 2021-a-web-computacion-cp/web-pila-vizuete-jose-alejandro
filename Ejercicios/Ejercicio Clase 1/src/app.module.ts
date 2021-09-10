import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Decorador-> funciones que ayudan hace algo extra al controlador
@Module({
  //Modulos importados
  imports: [],
  //Controladores de este modulo
  controllers: [AppController],
  //Servicios de este modulo
  providers: [AppService],
  //Servicios EXPORTADOS(que se oueden usar fuera del modulo
  exports: [AppService],
})
export class AppModule {}
