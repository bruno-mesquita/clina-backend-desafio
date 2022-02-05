import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Room } from "./Room";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  encoded: string;

  @ManyToOne(() => Room, room => room.photos)
  room: Room;
}
