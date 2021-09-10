import { BadRequestException, Controller, Get, HttpCode, InternalServerErrorException } from '@nestjs/common';
import { AppService } from './app.service';

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
  @Get('bad-request')
  badRequest() {
    throw new BadRequestException();
  }
  @Get('internal-error')
  internalError() {
    throw new InternalServerErrorException();
  }
}
/*
  @Get('setear-cookie-insegura')
  setearCookieInsegura(
    @Req() req, //Request que nos llega del usuario
    @Response() res,
  ){
    res.cookie(
      'galletaInsegura',
      'Tengo hambre',
    );
    res.cookie(
      'galletaSegura',
      'Web :3',
      {
        secure: true,
      },
    );
    res.send('ok');
  }
  @Get ('mostrar-cookies')
  mostrarCookie(@Req() )
}*/
