import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class products {

    @PrimaryColumn()
    id: number;

    @Column()
    catID: number;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    sold: number;

    @Column()
    sellerName: string;

    @Column()
    city: string;

    @Column()
    transportFee: number;

    @Column()
    transportFirm: string;

    @Column({ length: 50 })
    name:string;

    @Column({ length: 200 })
    description:string;

    @Column()
    images: [string];
}
