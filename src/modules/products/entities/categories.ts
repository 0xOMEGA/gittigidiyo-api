import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class cats {

    @PrimaryColumn()
    id: number;

    @Column()
    mainCat: number;

    @Column()
    name: string;
}
