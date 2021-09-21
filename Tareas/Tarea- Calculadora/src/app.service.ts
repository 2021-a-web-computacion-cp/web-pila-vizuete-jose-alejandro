import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sumar(numero1: number, numero2: number):number{
    return(numero1+numero2)
  }
  restar(numero1: number, numero2: number):number{
    return(numero1-numero2)
  }
  multiplicar(numero1: number, numero2: number):number{
    return(numero1*numero2)
  }
  pedirnumero(numero1: number):number{
    return numero1
  }
}
