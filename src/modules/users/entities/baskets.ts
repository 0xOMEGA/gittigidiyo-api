import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class baskets {

    @PrimaryColumn()
    customerID: number;

    @Column()
    products:items[];

}

export class items {
    productId: number;
    pcs: number;
}
