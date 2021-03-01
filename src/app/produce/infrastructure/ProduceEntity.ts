import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "Produces"})
export class ProduceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true, length: 50, nullable: false})
  name: string;
}
