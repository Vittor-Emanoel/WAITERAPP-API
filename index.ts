import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';
mongoose.connect()
  .then(() => {
    const app = express();

    const port = 3001;


    app.use('/upload', express.static(path.resolve(__dirname, '..', 'uploads'))); //arquivo estatico
    app.use(express.json());
    app.use(router);

    app.listen(port, () =>  {
      console.log(`🚀 Server is running on ${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar com o mongo'));


