import { Request, Response } from 'express';

export function helloController(_req: Request, res: Response) {
    res.json({ message: '¡Hola desde el backend!' });
}