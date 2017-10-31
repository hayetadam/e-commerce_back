import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Order } from "./order";
import { Addresse } from "./addresse";

@Entity()
export class User {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   pseudo: string;

   @Column()
   age: number;

   @Column()

   mail: string;

   @Column()
   
    mdp: string;

   @OneToMany( type => Addresse, addresse => addresse.user)
   addresse: Addresse[];

   @OneToMany( type => Order, order => order.user)
orders: Order[];

}