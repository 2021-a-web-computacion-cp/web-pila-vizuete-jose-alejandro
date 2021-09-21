import { Body, Headers, Header, Controller, Get, HttpCode, Param, Post, Query, Req, Res, Put } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('sumar')
  @HttpCode(200)
  sumaConsulta(@Query('num1') numero1, @Query('num2') numero2, @Res() res, @Req() req){
    res.cookie('cookie-valor',100);
    var valor1= req.cookies
    var valor = 100-parseInt(numero1)-parseInt(numero2);
    var suma = this.appService.sumar(parseInt(numero1), parseInt(numero2));
    var regreso;
    if (valor<0){
      regreso='Fin del juego'
    }else{
      regreso=valor;
    }
    res.cookie('cookie-valor', regreso);
    res.send(suma.toString());
  }
  @Post('restar')
  @HttpCode(200)
  restaConsulta(@Body('num1')numero1, @Body('num2') numero2,@Res() res) {
    var resta= this.appService.restar(parseInt(numero1), parseInt(numero2));
    var valor=100-resta;
    var regreso;
    if (valor<0){
      regreso='Fin del juego'
    }else{
      regreso=valor;
    }
    res.cookie('cookie-valor', regreso);
    res.send(resta.toString());
  }
  @Put('multiplicar')
  @HttpCode(200)
  multiplicarConsulta(@Query('num1') numero1, @Query('num2') numero2, @Res() res) {

    var multipli=this.appService.multiplicar(parseInt(numero1), parseInt(numero2));
    var valor = 100-multipli;
    var regreso;
    if (valor<0){
      regreso='Fin del juego'
    }else{
      regreso=valor;
    }

    res.cookie('cookie-valor', regreso);
    res.send(multipli.toString());

  }
}
