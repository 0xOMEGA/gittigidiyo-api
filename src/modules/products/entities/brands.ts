import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class brands {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logoPath: string;
}
