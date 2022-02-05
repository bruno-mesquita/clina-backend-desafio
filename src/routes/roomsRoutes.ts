import { Router } from 'express';

import { RoomController } from '../controllers/RoomController';

const roomController = new RoomController();
const roomsRoutes = Router();

roomsRoutes.get('/room', roomController.search);
roomsRoutes.get('/room/:id', roomController.findOne);


export { roomsRoutes };
