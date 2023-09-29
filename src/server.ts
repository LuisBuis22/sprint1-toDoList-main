import express, { Request, Response } from 'express';

const app = express()

const PORT = 3000

app.get('/', (_req: Request, res: Response) => {
    console.log('me han llamado');
    
    res.send('¡Hola, mundo!');
  });

app.get('/ping', (_req:Request, res:Response) => {
    res.send('pong');
})
  
  app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
  });
