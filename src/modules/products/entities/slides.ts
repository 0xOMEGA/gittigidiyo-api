import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class slides {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slides: string[];

    @Column()
    miniIcons: string[];
}
