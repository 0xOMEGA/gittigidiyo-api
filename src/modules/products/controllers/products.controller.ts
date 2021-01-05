import { Controller, Get, Request, Post } from '@nestjs/common';
import { ProductsService } from "../services/products.service";

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('productByID')
  async productByID(@Request() req) {
    return await this.productsService.findProductByID(parseInt(req.body.id));
  }

  @Post('listCategoriesByMID')
  async listCategoriesByMID(@Request() req) {
    return await this.productsService.listCatsByMainCat(parseInt(req.body.id));
  }

  @Post('listMainCategories')
  async listMainCats(@Request() req) {
    return await this.productsService.listMainCats();
  }

  @Post('listSlides')
  async listSlides(@Request() req) {
    return await this.productsService.listSlides();
  }

  @Post('listFeaturedCats')
  async listFeaturedCats(@Request() req) {
    return await this.productsService.listFeaturedCats();
  }

  @Post('listBrands')
  async listBrands(@Request() req) {
    return await this.productsService.listBrands();
  }

}
