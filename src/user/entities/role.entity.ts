import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User_data } from "./user.entity";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  role_id: number;

  @Column()
  role_name: string;

  @OneToMany(() => User_data, (user) => user.roles)
  users: User_data[];

  @BeforeInsert()
  generateUUID() {
    this.role_id = uuidv4();
  }


}