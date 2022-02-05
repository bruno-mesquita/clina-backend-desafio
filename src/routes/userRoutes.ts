import { Router } from 'express';

import { UserController } from '../controllers/UserController';

const userController = new UserController();
const userRoutes = Router();

userRoutes.post('/users', userController.create);


export { userRoutes };
