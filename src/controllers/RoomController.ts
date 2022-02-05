import type { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import { Room } from '../entity';

export class RoomController {
  async findOne({ params }: Request, res: Response) {
    try {
      const roomRepository = getRepository(Room);

      const roomId = params.id;

      const room = await roomRepository.findOne({ where: { id: roomId } });

      return res.json(room);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro ao criar usuário' });
    }
  }
}
