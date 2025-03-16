import { Request, response, Response, RequestHandler } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const { nome, email, cnpj, senha } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({nome, email, cnpj, senha});

        res.json(user);
    }
}

export {CreateUserController}