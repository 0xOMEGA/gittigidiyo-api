import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { products } from '../entities/products';
import {cats} from "../entities/categories";
import {maincats} from "../entities/mainCategories";
import {slides} from "../entities/slides";
import {brands} from "../entities/brands";
import {fcats} from "../entities/featuredCategories";

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(products) private readonly productsRepository: Repository<products>,
                @InjectRepository(cats) private readonly categoryRepository: Repository<cats>,
                @InjectRepository(maincats) private readonly maincatsRepository: Repository<maincats>,
                @InjectRepository(slides) private readonly slidesRepository: Repository<slides>,
                @InjectRepository(brands) private readonly brandsRepository: Repository<brands>,
                @InjectRepository(fcats) private readonly fcatsRepository: Repository<fcats>) { }
    async findProductByID(id: number): Promise<products> {
        return await this.productsRepository.findOne({
            where: { "id": id }
        });
    }
    async listCatsByMainCat(id: number): Promise<cats[]> {
        return await this.categoryRepository.find({
            where: { "mainCat": id }
        });
    }

    async listMainCats(): Promise<maincats[]> {
        return await this.maincatsRepository.find();
    }

    async listSlides(): Promise<slides> {
        return await this.slidesRepository.findOne();
    }

    async listBrands(): Promise<brands[]> {
        return await this.brandsRepository.find();
    }

    async listFeaturedCats(): Promise<fcats[]> {
        return await this.fcatsRepository.find();
    }
}
