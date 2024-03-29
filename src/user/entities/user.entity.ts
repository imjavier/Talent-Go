import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./role.entity";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User_data {

    @PrimaryGeneratedColumn('uuid')
    user_id: string
 
    @Column()
    first_name:string;

    @Column()
    last_name:string;

    @Column()
    email:string;
    
    @Column()
    password:string;

    @ManyToMany(() => UserRole)
    @JoinTable()
    roles: UserRole[];

    @BeforeInsert()
    generateUUID() {
      this.user_id = uuidv4();
    }
}
