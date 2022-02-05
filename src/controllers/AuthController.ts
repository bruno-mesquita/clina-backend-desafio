import type { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import TokenManager from '../utils/TokenManager';
import { User } from '../entity';

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const userRepository = getRepository(User);
      const tokenManager = new TokenManager();

      const modelDto = req.body;

      const user = await userRepository.findOne({
        where: { email: modelDto.email }
      });

      if(!user && !user.comparePassword(modelDto.password)) throw new Error();

      const token = tokenManager.create(user.id);

      return res.json({ token });
    } catch (err) {
      return res.status(400).json({ errorMessage: 'Erro ao fazer login' });
    }
  }
}
