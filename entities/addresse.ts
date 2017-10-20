import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from './user'

@Entity()
export class Addresse {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   nom: string;

   @Column()
   prenom: string;

   @Column()
   numeroRue: number;

   @Column()
   nomRue: string;

   @Column()
   codePostal: number;

   @Column()
   ville: string;
   
   @ManyToOne(type => User, user => user.addresse)
   user: User;
}