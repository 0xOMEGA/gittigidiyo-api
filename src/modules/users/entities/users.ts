import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class users {

    @PrimaryColumn()
    id: number;

    @Column({ length: 50 })
    name:string;

    @Column({ length: 50 })
    password:string;
}
