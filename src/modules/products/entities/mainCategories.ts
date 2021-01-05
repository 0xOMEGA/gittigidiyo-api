import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class maincats {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
