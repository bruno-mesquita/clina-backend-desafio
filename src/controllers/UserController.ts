import type { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entity';

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);

      const modelDto = req.body;

      const user = userRepository.create(modelDto as User);

      await  userRepository.save(user);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro ao criar usuário' });
    }
  }
}
