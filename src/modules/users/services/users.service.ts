import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { users } from '../entities/users';
import {baskets, items} from "../entities/baskets";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(users) private readonly usersRepository: Repository<users>,
                @InjectRepository(baskets) private readonly basketsRepository: Repository<baskets>) { }
    async findOne(username: string): Promise<users> {
        return await this.usersRepository.findOne({
            where: { "name": username }
        });
    }

    async getBasket(id: number): Promise<baskets> {
        return await this.basketsRepository.findOne({
            where: { "customerID": id }
        });
    }

    async removeFromBasket(id: number, productId: number, pcs: number): Promise<baskets> {
        let userBasket = await this.basketsRepository.findOne({
            where: { "customerID": id }
        });
        if(pcs === 0){
            for(var i = 0; i < userBasket.products.length; i++){
                if ( userBasket.products[i].productId === productId) {
                    userBasket.products.splice(i, 1);
                    i--;
                }
            }
            await this.basketsRepository.update(
                { "customerID": id }, userBasket
            );
            return await this.basketsRepository.findOne({
                where: { "customerID": id }
            });
        }else{
            for(var i = 0; i < userBasket.products.length; i++){
                if ( userBasket.products[i].productId === productId) {
                    if(userBasket.products[i].pcs === 1){
                        userBasket.products.splice(i, 1);
                        i--;
                    }else{
                        userBasket.products[i].pcs = userBasket.products[i].pcs - pcs;
                    }
                }
            }
            await this.basketsRepository.update(
                { "customerID": id }, userBasket
            );
            return await this.basketsRepository.findOne({
                where: { "customerID": id }
            });
        }
    }

    async addToBasket(id: number, productId: number, pcs: number): Promise<baskets> {
        let userBasket = await this.basketsRepository.findOne({
            where: { "customerID": id }
        });
        let itemExists = false;
        for(var i = 0; i < userBasket.products.length; i++){
            if ( userBasket.products[i].productId === productId) {
                    userBasket.products[i].pcs = userBasket.products[i].pcs + pcs;
                    itemExists = true;
            }
        }
        if(!itemExists){
            let newItem = new items;
            newItem.productId = productId;
            newItem.pcs = pcs;
            userBasket.products.push(newItem);
        }
        await this.basketsRepository.update(
            { "customerID": id }, userBasket
        );
        return await this.basketsRepository.findOne({
            where: { "customerID": id }
        });
    }
}
