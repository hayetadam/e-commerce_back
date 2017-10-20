import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { Brand } from "./brand";
import { Category } from "./category";
import { Order } from "./order";
import { Basket } from "./basket";

@Entity()
export class Product {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

   @Column()
   price: number;

   @Column()
   rfProduct: number;
   
   @ManyToOne(type => Brand, brand => brand.products)
   brand: Brand;

   @ManyToOne(type => Category, category => category.products)
   category: Category;

   @ManyToMany(type => Basket, basket => basket.products)
   @JoinTable()
   baskets: Category;

   @ManyToMany(type => Order, order => order.products)
   @JoinTable()

orders: Order[]; 
}