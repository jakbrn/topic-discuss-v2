import {
  Body,
  Controller,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { UsersService } from 'src/users/users.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() _body: LoginDto, @Request() req, @Response() res) {
    return this.authService.login(req.user, res);
  }

  @Post('logout')
  async logout(@Response() res) {
    return this.authService.logout(res);
  }

  @Public()
  @Post('register')
  async register(@Body() body: RegisterDto, @Response() res) {
    const { username, password } = body;
    const user = await this.usersService.createUser({
      username,
      password,
    });
    return this.authService.login(user, res);
  }
}
