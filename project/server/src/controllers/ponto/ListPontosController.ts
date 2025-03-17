import { Request, response, Response, RequestHandler } from 'express';
import { ListPontosService } from '../../services/ponto/ListPontosService';

class ListPontosController{
    handle: RequestHandler = async(req: Request, res: Response) => {
        const user_id = Number(req.query.user_id);

        if (isNaN(user_id)) {
            res.status(400).json({ error: 'Invalid user_id parameter' });
            return;
        }

        const listPontoService = new ListPontosService();

        const pontos = await listPontoService.execute(user_id);

        res.json(pontos);
        return;
        
    }
}

export {ListPontosController}