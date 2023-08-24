import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { AppError } from './shared/errors/AppError';
import 'express-async-errors';
import cors from 'cors';
import { routes } from '@src/routes';
import 'colors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

// app.use((err: Error, req: Request, res: Response) => {
//     if (err instanceof AppError) {
//         return res.status(err.statusCode).json({
//             message: err.message
//         });
//     }
//     return res.status(500).json({
//         error: 'Error',
//         message: 'Erro no servidor'
//     });
// });

app.listen(5555, () => {
    console.log('App a todo vapor 🔥'.green);
});