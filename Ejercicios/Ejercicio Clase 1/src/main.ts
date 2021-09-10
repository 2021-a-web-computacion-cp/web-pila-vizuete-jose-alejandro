import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
//package .json
//nmp run start
//nodejs command prompt
//VARIABLES PRIMITIVAS
//TIPOS DE VARIABLES
/*abstract class Nombre {
  public nombrePropiedad?: string;
  public apellidoPropiedad = 'Eguez';
  protected edad = 1;
  static comun = 10;
  propiedadPublica: string;
  constructor(
    propiedadPublicaParametro: string,
    public propiedadRapido: string,
  ) {
    this.propiedadPublica = propiedadPublicaParametro;
    this.propiedadRapido;
  }
  public funcionPublica(parametroString: string): void {}
  private funcionPrivada(parametroString: string, parametroNumber?: number){}
  protected funcionPublicaI(): number {
    return 1;
  }
  static funcionEstatica(): string {
    return 'String';
  }
}*/
