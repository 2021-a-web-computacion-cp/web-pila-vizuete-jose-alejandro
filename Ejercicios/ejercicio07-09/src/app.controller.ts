import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

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
}