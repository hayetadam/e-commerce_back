import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity()

export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    mdp: string;
}