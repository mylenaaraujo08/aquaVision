import prismaClient from "../../prisma";

interface ParametroRequest {
    ph: number;
    turbidez: number;
    condutividade: number;
    temperature: number;
    salinidade: number;
    oxigenioDissolvido: number;
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
                data: new Date(),
                pontoId
            }
        });

        return parametro;
    }
}

export { CreateParamService };
