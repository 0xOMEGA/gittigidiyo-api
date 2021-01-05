import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {products} from "./entities/products";
import {cats} from "./entities/categories";
import {maincats} from "./entities/mainCategories";
import {slides} from "./entities/slides";
import {brands} from "./entities/brands";
import {fcats} from "./entities/featuredCategories";

@Module({
  imports: [TypeOrmModule.forFeature([products, cats, maincats, slides, brands, fcats])],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
