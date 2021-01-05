
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/entities/jwt-auth.guide';
import { LocalAuthGuard } from 'src/modules/auth/entities/local-auth.guide';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from "../services/users.service";

@Controller()
export class UsersController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('basket')
  showBasket(@Request() req) {
    return this.usersService.getBasket(parseInt(req.user.userId));
  }

  @UseGuards(JwtAuthGuard)
  @Post('removeFromBasket')
  removeFromBasket(@Request() req) {
    return this.usersService.removeFromBasket(parseInt(req.user.userId), parseInt(req.body.productId), parseInt(req.body.pcs));
  }

  @UseGuards(JwtAuthGuard)
  @Post('addToBasket')
  addToBasket(@Request() req) {
    return this.usersService.addToBasket(parseInt(req.user.userId), parseInt(req.body.productId), parseInt(req.body.pcs));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
