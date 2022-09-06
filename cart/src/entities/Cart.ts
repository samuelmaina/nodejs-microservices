import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../../../customers/src/entities/Customer";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Customer)
  userId: Customer;

  @Column({ default: 0 })
  total: string;
}
