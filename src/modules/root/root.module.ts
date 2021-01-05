import { Module } from '@nestjs/common';
import { UsersController } from '../users/controllers/users.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProductsModule} from "../products/products.module";
import {ProductsController} from "../products/controllers/products.controller";

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mongodb",
    "host": "localhost",
    "database": "gittigidiyo",
    "entities": ["dist/modules/users/entities/*.js", "dist/modules/products/entities/*.js"],
    "synchronize": false
  }), AuthModule, UsersModule, ProductsModule],
  controllers: [UsersController, ProductsController],
})
export class RootModule {}
