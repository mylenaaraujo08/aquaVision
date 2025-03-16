import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreatePontoController } from './controllers/ponto/CreatePontoController';
import { CreateMonitController } from './controllers/monitoramento/CreateMonitController';
import { CreateParamController } from './controllers/parametro/CreateParamController';
import { ListPontosController } from './controllers/ponto/ListPontosController';

import uploadConfig from './config/multer';
import multer from 'multer';
import { DetailPontoController } from './controllers/ponto/DetailPontoController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// ------- ROTAS DE USER -------
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

// ------- ROTAS DE PONTO -------
router.post('/create/ponto', upload.single('file'), new CreatePontoController().handle);
router.get('/list/pontos', new ListPontosController().handle);
router.get('/detail/ponto', new DetailPontoController().handle);

// ------- ROTAS DE MONITORAMENTO -------
router.post('/monitoramento', new CreateMonitController().handle);

// ------- ROTAS DE PARAMETRO -------
router.post('/parametro', new CreateParamController().handle);

export default router;
