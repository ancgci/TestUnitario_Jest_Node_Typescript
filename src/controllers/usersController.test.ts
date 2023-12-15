import { Request } from "express";
import { UsersController } from "./usersController"
import { makeMockResponse } from "../mocks/mockResponse";

describe('Users Controller', () => {
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse(); 
    
    it('Deve listar os nossos usuários', () => {
        usersController.listarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(4);
    })

    it('Deve criar um novo usuario', () => {
        mockRequest.body = { name: 'Diego' };
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ 'mensagem': 'Usuário criado com sucesso' });
    })

    it('Deve retornar o erro de nome inválido', () => {
        mockRequest.body = { name: 'D' };
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({ 'mensagem': 'Nome inválido' });
    })
})