import { Request, Response } from 'express'
import { database } from '../database'

export class UsersController {
    criarUsuario (request: Request, response: Response): Response {
        const { name } = request.body;

        if (name.length < 3) {
            return response.status(403).json({ 'mensagem': 'Nome inválido' });
        }
        database.push(name);
        return response.status(201).json({ 'mensagem': 'Usuário criado com sucesso' });
    }

    listarUsuario (request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}
