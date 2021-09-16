import { BadRequestException, Controller, Get, HttpCode, InternalServerErrorException, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
//Podemos empezar a crear metodos
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

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
/*Envio de excepciones*/

  @Get('bad-request')
  badRequest() {
    throw new BadRequestException();
  }
  @Get('internal-error')
  internalError() {
    throw new InternalServerErrorException();
  }
  /*mANEJO DE COOKIES*/
  @Get('setear-cookie-insegura')
  setearCookie(
    @Req() req, //request -> PETICION
    @Res() res, //response -> RESPUESTA
  ) {
    res.cookie(
      'galletaInsegura',
      'Tengo hambre'
    );
    res.cookie(
      'galletaSegura',
      'Web :3',
      {
      secure: true,
      }
    );
    res.send('ok');
  }
  @Get('mostrarCookies')
  mostrarCookies(@Req() req) {
    const mensaje = {
      sinFirmar: req.cookies,
      firmadas: req.signedCookies,
    };
    return mensaje;
  }
}
/*
import { Controller, Get, Module } from '@nestjs/common';
import { UsuarioService } from './app.service';
import { UsuarioController } from './app.service.';

//http://localhost:3000/usuario/......
@Controller('usuario')
export class UsuarioController {
  constructor(
    //Ingresar dependencias
    private usuarioService: UsuarioService,
  ) {}

  @Get(':idUsuario')
  obtenerUno(@Param() parametrosRuta) {
    return this.usuarioService.buscarUno(parametrosRuta.idUsuario);
  }
}
*/