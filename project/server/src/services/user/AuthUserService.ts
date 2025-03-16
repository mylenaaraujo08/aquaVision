import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import { sign } from 'jsonwebtoken';

interface UserRequest {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({ email, senha }: UserRequest) {

        // verificar se ele enviou um email
        if (!email) {
            throw new Error("Email incorrect")
        }

        //Verificar se esse email já está cadastrado na plataforma
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Email or password incorrect")
        }

        const senhaMatch = await compare(senha, user.senha);

        if(!senhaMatch){
            throw new Error("Email or password incorrect")
        }

        //gerar um token JWT e devolver os dados do usuário como id, name e email
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        const token = sign(
            {
                name: user.nome,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: String(user.id),
                expiresIn: '30d'
            }
        );

        return { 
            id: user.id,
            name: user.nome,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }