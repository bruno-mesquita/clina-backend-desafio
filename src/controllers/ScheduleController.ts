import type { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import yupWrapper from '../utils/yupWrapper';
import { Schedule, Room } from '../entity';

type QueryDate = {
  day: number;
  month: number;
  year: number;
}

const dateValidate = yupWrapper<QueryDate>(Yup.object().shape({
  day: Yup.number().positive().integer().min(1).max(31).required(),
  month: Yup.number().positive().integer().min(1).max(12).required(),
  year: Yup.number().positive().integer().min(2022).max(2022).required(),
}))

export class ScheduleController {
  async search({ query }: Request, res: Response) {
    try {
      const scheduleRepository = getRepository(Schedule);

      // Formato esperado xxxx-xx-xx
      const [day, month, year] = (query.date as string).split('-');
      const values = dateValidate({ day: Number(day), month: Number(month), year: Number(year) });


      const schedules = await scheduleRepository.find({
        where: {
          date: `${values.year}-${values.month}-${values.day}`,
          status: 'disponível',
        }
      })

      return res.json(schedules);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro ao criar usuário' });
    }
  }

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
      return res.status(400).json({ errorMessage: 'Erro ao criar usuário' });
    }
  }

  async createe({ body }: Request, res: Response) {
    try {
      const scheduleRepository = getRepository(Schedule);
      const roomRepository = getRepository(Room);

      // verificando se a sala existe
      const room = await roomRepository.findOne({ where: { id: body.room }, select: ['id'] });

      if(!room) throw new Error('Sala não encontrada');

      // Verificando se já não tem um agendamento nesse dia e hora
      const scheduleExits = await scheduleRepository.findOne({
        where: {
          date: body.date,
          period: body.period,
          room: body.room,
          status: 'reservada',
        }
      })

      if(scheduleExits) throw new Error('Já tem uma reservada nesse dia e periodo!');

      const schedule = scheduleRepository.create(body as Schedule)

      await scheduleRepository.save(schedule);

      return res.json(schedule);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro ao criar usuário' });
    }
  }
}
