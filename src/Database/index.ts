import { createConnection, getConnection } from 'typeorm';

import { User, Room, Schedule } from '../entity';
import { room, schedules, users } from './seeds';

class Database {
  async init(): Promise<void> {
    try {
      await createConnection();

      await this.seeds();
    } catch (err) {
      console.log(err);
      console.log('Erro ao se conectar ao database');
    }
  }


  async seeds() {
    try {
      const conn = getConnection();
      const userRepo = conn.getRepository(User);
      const RoomRepo = conn.getRepository(Room);
      const scheduleRepo = conn.getRepository(Schedule);

      const caioExists = await userRepo.findOne({ where: {
        email: 'caio@clina.care.com',
      } })

      if(!caioExists) {
        console.log('Start Seeds...');
        const newUsers = userRepo.create(users as any);
        await userRepo.save(newUsers);

        const newRooms = RoomRepo.create(room as any);
        await RoomRepo.save(newRooms);

        const values = [];
        newRooms.forEach(room => values.push(...schedules(room.id)));
        const newschedules = scheduleRepo.create(values);
        await scheduleRepo.save(newschedules);
        console.log('Finish Seeds...');
      }
    } catch (err) {
      console.log(err);
    }
  }

}

export default Database;
