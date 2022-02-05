import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { userRoutes } from './userRoutes';

const routerRoot = Router();

routerRoot.use([authRoutes, userRoutes]);

export default routerRoot;
