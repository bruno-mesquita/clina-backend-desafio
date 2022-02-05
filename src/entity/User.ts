import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToOne, JoinColumn } from "typeorm";
import { compareSync, hashSync } from 'bcryptjs';

import { Image } from './Image';

@Entity({ synchronize: true })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Image)
  @JoinColumn()
  avatar: Image;

  @BeforeInsert()
  hashPassoword() {
    this.password = hashSync(this.password, 8);
  }

  comparePassword(compare: string): boolean {
    try {
      return compareSync(compare, this.password);
    } catch (e) {
      return false;
    }
  }
}

