import { Request, response, Response, RequestHandler } from 'express';
import { CreatePontoService } from '../../services/ponto/CreatePontoService';

class CreatePontoController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const { nome, latitude, longitude, ip, tipo, user_id } = req.body;

        const createPontoService = new CreatePontoService();

        if(!req.file){
            throw new Error("error upload file")
        }else{

            const { originalname, filename: imagem } = req.file;

            const user = await createPontoService.execute({ 
                nome, 
                latitude: parseFloat(latitude), 
                longitude: parseFloat(longitude), 
                ip, 
                tipo: tipo, 
                imagem, 
                user_id: parseInt(user_id) 
            });

            res.json(user);
        }
    }
}

export {CreatePontoController}