import prismaClient from "../../prisma";

interface ParametroRequest {
    ph: number;
    turbidez: number;
    condutividade: number;
    temperature: number;
    salinidade: number;
    oxigenioDissolvido: number;
    data: Date;
    pontoId: number;
}

class CreateParamService {
    async execute({
        ph,
        turbidez,
        condutividade,
        temperature,
        salinidade,
        oxigenioDissolvido,
        data,
        pontoId
    }: ParametroRequest) {
        
        const pontoExists = await prismaClient.ponto.findFirst({
            where: {
                id: pontoId
            }
        });

        if (!pontoExists) {
            throw new Error("Ponto não existe");
        }

        // Criar o parâmetro associado ao ponto
        const parametro = await prismaClient.parametro.create({
            data: {
                ph,
                turbidez,
                condutividade,
                temperature,
                salinidade,
                oxigenioDissolvido,
                data: data,
                pontoId
            }
        });

        return parametro;
    }
}

export { CreateParamService };
