import { Router } from 'express';
import photoController from '../controllers/Photo';

import requireAuth from '../middlewares/requireAuth';

const router = new Router();

router.post('/', requireAuth, photoController.create);

export default router;
