import { Request, Response, RequestHandler } from 'express';
import { CreateParamService } from '../../services/parametro/CreateParamService';

class CreateParamController {
    handle: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        try {
            const { ph, turbidez, condutividade, temperature, salinidade, oxigenioDissolvido, data, pontoId } = req.body;

            const createParamService = new CreateParamService();

            const parametro = await createParamService.execute({
                ph,
                turbidez,
                condutividade,
                temperature,
                salinidade,
                oxigenioDissolvido,
                data,
                pontoId
            });

            res.json(parametro);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: "Ocorreu um erro desconhecido." });
            }
        }
    };
}

export { CreateParamController };