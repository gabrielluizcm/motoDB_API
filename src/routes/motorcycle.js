import { Router } from 'express';
import motorcycleController from '../controllers/Motorcycle';

import requireAuth from '../middlewares/requireAuth';

const router = new Router();

router.get('/', motorcycleController.index);
router.get('/:id', motorcycleController.show);
router.post('/', requireAuth, motorcycleController.create);
router.put('/:id', requireAuth, motorcycleController.update);
router.delete('/:id', requireAuth, motorcycleController.delete);

export default router;
