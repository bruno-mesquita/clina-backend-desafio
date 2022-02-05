import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { shedulesRoutes } from './shedulesRoutes';
import { roomsRoutes } from './roomsRoutes';
import isAuthenticated from '../middlewares/isAuthenticated';

const routerRoot = Router();

routerRoot.use([authRoutes, isAuthenticated, shedulesRoutes, roomsRoutes]);

export default routerRoot;
