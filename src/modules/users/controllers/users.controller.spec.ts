import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';

describe('LoginController', () => {
  let loginController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    loginController = app.get<UsersController>(UsersController);
  });

  describe('login', () => {
    it('should return "Hello World!"', () => {
      expect(loginController.getHello()).toBe('Hello World!');
    });
  });
});
