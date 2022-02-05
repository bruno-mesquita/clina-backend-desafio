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
export class RoomController {
  async findOne({ params }: Request, res: Response) {
    try {
      const roomRepository = getRepository(Room);

      const roomId = params.id;

      const room = await roomRepository.findOne({ where: { id: roomId }, relations: ['address'] });

      return res.json(room);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro' });
    }
  }

  async search({ query }: Request, res: Response) {
    try {
      const scheduleRepository = getRepository(Schedule);

      // Formato esperado xxxx-xx-xx
      const [year, month, day] = (query.date as string).split('-');
      console.log({ day: Number(day), month: Number(month), year: Number(year) });
      const values = dateValidate({ day: Number(day), month: Number(month), year: Number(year) });

      const date = `${values.year}-${values.month < 10 ? '0' + values.month : values.month}-${values.day < 10 ? '0' + values.day : values.day}`;

      const schedules = await scheduleRepository.find({
        where: {
          date,
          status: 'disponível',
        },
        relations: ['room']
      })

      return res.json(schedules);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro' });
    }
  }
}
