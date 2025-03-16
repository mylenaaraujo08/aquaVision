import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface UserRequest {
    nome: string;
    email: string;
    cnpj: string;
    senha: string;
}

class CreateUserService {
    async execute({ nome, email, cnpj, senha }: UserRequest) {

        // verificar se ele enviou um email
        if (!email) {
            throw new Error("Email incorrect")
        }

        //Verificar se esse email já está cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const senhaHash = await hash(`${senha}`, 8);

        const user = await prismaClient.user.create({
            data: {
                nome: `${nome}`,
                email: `${email}`,
                cnpj: `${cnpj}`,
                senha: `${senhaHash}`,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                cnpj: true,
            }
        });

        return user;
    }
}

export { CreateUserService }