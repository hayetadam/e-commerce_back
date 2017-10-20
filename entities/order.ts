import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { Category } from "./category";
import { User } from "./user";
import { Product } from "./product";


@Entity()
export class Order {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   ref: string;

   @Column()
   dateOfOrder: Date;
   
   @ManyToOne(type => User, user => user.orders)
   user: User;

   @ManyToOne(type => Category, category => category.products)
   category: Category;

   @ManyToMany(type => Product, product => product.orders)
products: Product[];
}