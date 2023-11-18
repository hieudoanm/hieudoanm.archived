import { User } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Request,
  Route,
  Security,
  Tags,
} from 'tsoa';
import { UserRequest, UsersService } from './users.service';
import { USER_READ, USER_WRITE } from '../../common/constants';

@Tags('User')
@Route('/user')
export class UsersController extends Controller {
  private usersService: UsersService;

  constructor() {
    super();
    this.usersService = new UsersService();
  }

  @Security('jwt', [USER_READ])
  @Get()
  async getUser(
    @Request() request: { userId: string }
  ): Promise<Pick<User, 'id' | 'username'>> {
    const { userId } = request;
    return this.usersService.getUser(userId);
  }

  @Security('jwt', [USER_WRITE])
  @Patch('email')
  async updateEmail(
    @Request() request: { userId: string },
    @Body() { email }: UserRequest
  ): Promise<Pick<User, 'id' | 'email' | 'username'>> {
    const { userId } = request;
    return this.usersService.updateEmail(userId, email);
  }

  @Security('jwt', [USER_WRITE])
  @Patch('username')
  async updateUsername(
    @Request() request: { userId: string },
    @Body() { username }: UserRequest
  ): Promise<Pick<User, 'id' | 'username'>> {
    const { userId } = request;
    return this.usersService.updateUsername(userId, username);
  }

  @Security('jwt', [USER_WRITE])
  @Patch('password')
  async updatePassword(
    @Request() request: { userId: string },
    @Body() { password }: UserRequest
  ): Promise<Pick<User, 'id' | 'username'>> {
    const { userId } = request;
    return this.usersService.updatePassword(userId, password);
  }

  @Security('jwt', [USER_WRITE])
  @Delete()
  async deleteUser(@Request() request: { userId: string }): Promise<void> {
    const { userId } = request;
    return this.usersService.deleteUser(userId);
  }
}
