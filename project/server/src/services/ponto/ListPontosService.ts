import prismaClient from "../../prisma";

class ListPontosService {
    async execute(user_id:number) {

        //Verificar se esse email já está cadastrado na plataforma
        const userExists = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        if (!userExists) {
            throw new Error("User not exists")
        }

        const pontos = await prismaClient.ponto.findMany({
            where: {
                user_id: user_id
            },select: {
                id: true,
                nome: true,
                tipo: true,
                monitoramento: true,
                parametro: true,
            }
        });

        return pontos;
    }
}

export { ListPontosService }