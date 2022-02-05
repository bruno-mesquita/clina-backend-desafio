import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";

import { Image } from "./Image";
import { Address } from './Address';
import { Schedule } from './Schedule';

@Entity({ synchronize: true })
export class Room {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  description: string;

  @OneToMany(() => Image, photo => photo.room)
  photos: Image[];

  @OneToMany(() => Schedule, schedule => schedule.room)
  schedules: Schedule[];


  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  address: Address;
}
