import { Router } from 'express';
import UserController from '../controllers/User';

import requireAuth from '../middlewares/requireAuth';

const router = new Router();

router.get('/', requireAuth, UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
