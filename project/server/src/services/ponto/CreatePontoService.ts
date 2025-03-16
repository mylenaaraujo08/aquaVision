import prismaClient from "../../prisma";

interface PontoRequest { 
    nome: string;
    latitude: number;
    longitude: number;
    ip: string;
    tipo: 'RIO' | 'RESERVATORIO';
    imagem: string;
    user_id: number;
}

class CreatePontoService {
    async execute({ nome, latitude, longitude, ip, tipo, imagem, user_id }: PontoRequest) {

        //Verificar se esse email já está cadastrado na plataforma
        const userExists = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        if (!userExists) {
            throw new Error("User not exists")
        }

        const ponto = await prismaClient.ponto.create({
            data: {
                nome: `${nome}`,
                latitude: latitude,
                longitude: longitude,
                ip: `${ip}`,
                tipo: `${tipo}`,
                imagem: `${imagem}`,
                user_id: user_id
            }
        });

        return ponto;
    }
}

export { CreatePontoService }