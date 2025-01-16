import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.readAll);
router.post('/', userController.create);
router.get('/:id', userController.read);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

export default router;
