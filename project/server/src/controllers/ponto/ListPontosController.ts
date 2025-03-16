import { Request, response, Response, RequestHandler } from 'express';
import { ListPontosService } from '../../services/ponto/ListPontosService';

class ListPontosController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const { user_id } = req.body;

        const listPontoService = new ListPontosService();

        const pontos = await listPontoService.execute(user_id);

        res.json(pontos);
        
    }
}

export {ListPontosController}