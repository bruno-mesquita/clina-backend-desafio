import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ synchronize: true })
export class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  zipCode: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;
}
