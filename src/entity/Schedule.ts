import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Room } from "./Room";

type Period = 'manhã' | 'tarde' | 'noite'
type Status = 'disponível' | 'indisponível' | 'reservada';

@Entity({ synchronize: true })
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  period: Period;

  @Column()
  date: string;

  @ManyToOne(() => Room, room => room.schedules)
  room: Room;

  @Column()
  status: Status;
}
