import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface PontoRequest { 
    situacao: 'NORMAL' | 'ALERTA' | 'CRITICO';
    pontoAlerta: string;
    Minimo: number;
    Maximo: number;
    pontoId: number;
}

class CreateMonitService {
    async execute({ situacao, pontoAlerta, Minimo, Maximo, pontoId }: PontoRequest) {

        //Verificar se esse email já está cadastrado na plataforma
        const pontoExists = await prismaClient.ponto.findFirst({
            where: {
                id: pontoId
            }
        })

        if (!pontoExists) {
            throw new Error("Ponto not exists")
        }

        const user = await prismaClient.monitoramento.create({
            data: {
                situacao: `${situacao}`,
                pontoAlerta: pontoAlerta,
                Minimo: Minimo,
                Maximo: Maximo,
                pontoId: pontoId
            },
            select: {
                situacao: true,
                pontoAlerta: true,
                Minimo: true,
                Maximo: true,
                pontoId: true
            }
        });

        return user;
    }
}

export { CreateMonitService }