import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class fcats {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    logoPath: string;
}
