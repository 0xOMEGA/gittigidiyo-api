import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {users} from "./entities/users";
import {baskets} from "./entities/baskets";

@Module({
  imports: [TypeOrmModule.forFeature([users, baskets])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
