import prismaClient from "../../prisma";

interface DetailPontoRequest {
    user_id: number;
    pontoId: number;
}

class DetailPontoService {
    async execute({user_id, pontoId}: DetailPontoRequest) {

        //Verificar se esse email já está cadastrado na plataforma
        const userExists = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        if (!userExists) {
            throw new Error("User not exists")
        }

        const ponto = await prismaClient.ponto.findFirst({
            where: {
                user_id: user_id,
                id: pontoId
            },select: {
                nome: true,
                latitude: true,
                longitude: true,
                ip: true,
                tipo: true,
                imagem: true,
                monitoramento: {
                    select: {
                        situacao: true,
                        pontoAlerta: true,
                        Minimo: true,
                        Maximo: true
                    }
                },
                parametro: {
                    select: {
                        ph: true,
                        turbidez: true,
                        condutividade: true,
                        temperature: true,
                        salinidade: true,
                        oxigenioDissolvido: true,
                        data: true
                    }
                },
            }
        });

        return ponto;
    }
}

export { DetailPontoService }