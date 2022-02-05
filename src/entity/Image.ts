import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Room } from "./Room";

@Entity({ synchronize: true })
export class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  encoded: string;

  @ManyToOne(() => Room, room => room.photos)
  room: Room;
}
