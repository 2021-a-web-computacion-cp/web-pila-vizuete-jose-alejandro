import { Controller, Get, HttpCode} from '@nestjs/common';
import { AppService } from './app.service';
//Podemos empezar a crear metodos
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello1(): string {
    return '{mensaje: "Hola soy yo "}';
  }
  @Get('/texto')
  @HttpCode(200)
  getHello2(): string {
    return '{mensaje: "Hola este es un texto"}';
  }
  @Get('/html')
  @HttpCode(201)
  getHello3(): string {
    return '<h1>Hola html</h1>';
  }
  @Get('/json')
  @HttpCode(200)
  getHello4(): string {
    return '{mensaje: "Hola json "}';
  }
}
