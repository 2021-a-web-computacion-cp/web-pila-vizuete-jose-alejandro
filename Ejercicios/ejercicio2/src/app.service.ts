import { Injectable } from '@nestjs/common';

@Injectable()
/*export class UsuarioService {
  //Inyeccion de dependencias -> Constructor para inyectar dependecias y no crear nuevo
  constructor(
    private prisma: PrismaService
  ) {

  }
  buscarUno(id: number){
    return this.prisma.ePN_USUARIO.findUnique({
      where: {
        id: id,
      },
    });
  }
  crearUno(usuario: prisma.EPN_USUARIOCreateInput) {
    return this.prisma.ePN_USUARIO.create({
      data: usuario;
    });
  }
  actualizarUno(parametroActualizar:{
    where: Prisma.EPN_USUARIOWhereUniqueInput;
    data: Prisma.EPN_USUARIOUpdateInput;
  }) {
    return this.prisma.ePN_USUARIO.update({
      data: parametroActualizar.data,
      where: parametroActualizar.where,
    });
  }
  eliminarUno(where: Prisma.EPN_USUARIOWhereUniqueInput) {
    return this.prisma.ePN_USUARIO.delete({
      where:where, });
  }

}*/
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

