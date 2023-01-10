import { Router } from 'express';
import UserController from '../controllers/User';

import requireAuth from '../middlewares/requireAuth';

const router = new Router();

// for testing purposes only, will be removed on release
router.get('/', requireAuth, UserController.index);
router.get('/:id', requireAuth, UserController.show);

router.post('/', UserController.create);
router.put('/', requireAuth, UserController.update);
router.delete('/', requireAuth, UserController.delete);

export default router;
