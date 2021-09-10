import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/*import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';*/
//const cookieParser = require('cookie-parser');
//const express = require('express');
/*const session = require('express-session');
const FileStore = require('session-file-store')(session);*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
/*  app.use(express.static('publico'));
//  app.use(cookieParser('Un mensaje de prueba'));
//  app.use(
//    session({
//      name: 'server-session-id',
//      secret: 'El mensaje es importante',
//      resave: true,
      saveUninitialized: true,
      cookie: { secure: false },
      store: new FileStore(),
    }),
  );}
  //package.json
  //npm run start*/
