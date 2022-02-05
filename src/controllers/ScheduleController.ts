import type { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import { Schedule, Room } from '../entity';

export class ScheduleController {


  async byRoom({ params }: Request, res: Response) {
    try {
      const scheduleRepository = getRepository(Schedule);


      const schedules = await scheduleRepository.find({
        where: {
          room: params.roomId,
          status: 'disponível',
        }
      })

      return res.json(schedules);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro' });
    }
  }

  async create({ body }: Request, res: Response) {
    try {
      const scheduleRepository = getRepository(Schedule);
      const roomRepository = getRepository(Room);

      // verificando se a sala existe
      const room = await roomRepository.findOne({ where: { id: body.room }, select: ['id'] });

      if(!room) throw new Error('Sala não encontrada');

      // Verificando se já não tem um agendamento nesse dia e hora
      const schedule = await scheduleRepository.findOne({
        where: {
          id: body.scheduleId,
          room: body.room,
          status: 'disponível',
        }
      })

      if(!schedule) throw new Error();

      schedule.status = 'reservada';

      await scheduleRepository.save(schedule);

      return res.json(schedule);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro' });
    }
  }
}
