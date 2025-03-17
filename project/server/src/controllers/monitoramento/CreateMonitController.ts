import { Request, response, Response, RequestHandler } from 'express';
import { CreateMonitService } from '../../services/monitoramento/CreateMonitService';

class CreateMonitController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const { situacao, tipo, pontoAlerta, Minimo, Maximo, pontoId } = req.body;

        const createMonitService = new CreateMonitService();

        const user = await createMonitService.execute({ 
            situacao,
            tipo,
            pontoAlerta,
            Minimo,
            Maximo,
            pontoId
        });

        res.json(user);
    }
}

export {CreateMonitController}