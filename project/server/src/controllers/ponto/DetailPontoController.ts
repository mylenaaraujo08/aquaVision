import { Request, response, Response, RequestHandler } from 'express';
import { DetailPontoService } from '../../services/ponto/DetailPontoService';

class DetailPontoController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const user_id = parseInt(req.query.user_id as string);
        const pontoId = parseInt(req.query.pontoId as string);

        if (isNaN(pontoId)) {
            throw new Error('Invalid pontoId parameter');
        }

        if (!user_id) {
            throw new Error('Invalid user_id parameter');
        }

        const detailPontoService = new DetailPontoService();

        const pontos = await detailPontoService.execute({user_id, pontoId});

        res.json(pontos);
        
    }
}

export {DetailPontoController}