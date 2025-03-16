import { Request, response, Response, RequestHandler } from 'express';
import { AuthUserService } from '../../services/user/AuthUserService';

class AuthUserController{
    handle: RequestHandler = async(req: Request, res: Response): Promise<void> => {
        const { email, senha } = req.body;

        const authUserService = new AuthUserService();

        try {
            const user = await authUserService.execute({ email, senha});
            res.json(user);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

export {AuthUserController}