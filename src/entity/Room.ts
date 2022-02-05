import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";

import { Image } from "./Image";
import { Address } from './Address';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  description: string;

  @OneToMany(() => Image, photo => photo.room)
  photos?: Image[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}
