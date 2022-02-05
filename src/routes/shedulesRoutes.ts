import { Router } from 'express';

import { ScheduleController } from '../controllers/ScheduleController';

const scheduleController = new ScheduleController();
const shedulesRoutes = Router();

shedulesRoutes.post('/schedule', scheduleController.create);
shedulesRoutes.get('/schedule/:roomId', scheduleController.byRoom);


export { shedulesRoutes };
