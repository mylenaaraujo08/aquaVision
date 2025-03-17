import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface PontoRequest { 
    situacao: 'NORMAL' | 'ALERTA' | 'CRITICO';
    tipo: string;
    pontoAlerta: string;
    Minimo: number;
    Maximo: number;
    pontoId: number;
}

class CreateMonitService {
    async execute({ situacao, tipo, pontoAlerta, Minimo, Maximo, pontoId }: PontoRequest) {

        //Verificar se esse email já está cadastrado na plataforma
        const pontoExists = await prismaClient.ponto.findFirst({
            where: {
                id: pontoId
            }
        })

        if (!pontoExists) {
            throw new Error("Ponto not exists")
        }

        const monit = await prismaClient.monitoramento.create({
            data: {
                situacao: `${situacao}`,
                tipo: `${tipo}`,
                pontoAlerta: pontoAlerta,
                Minimo: Minimo,
                Maximo: Maximo,
                pontoId: pontoId
            },
            select: {
                situacao: true,
                tipo: true,
                pontoAlerta: true,
                Minimo: true,
                Maximo: true,
                pontoId: true
            }
        });

        return monit;
    }
}

export { CreateMonitService }