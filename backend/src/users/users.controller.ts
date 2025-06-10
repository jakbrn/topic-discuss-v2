import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async user(@Request() req) {
    const userId = req.params.id;
    return this.usersService.user({ id: userId });
  }
}
