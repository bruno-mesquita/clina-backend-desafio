import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

import { Room } from "./Room";

type Period = 'manhã' | 'tarde' | 'noite'
type Status = 'disponível' | 'indisponível' | 'reservada';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  period: Period;

  @Column()
  date: string;

  @OneToOne(() => Room)
  @JoinColumn()
  room: Room;

  @Column()
  status: Status;
}
