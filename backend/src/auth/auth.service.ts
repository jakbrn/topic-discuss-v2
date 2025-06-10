import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.user({ username });
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: any, response: Response) {
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    response.cookie('Authentication', token, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return response.send({ success: true });
  }

  async logout(response: Response) {
    response.clearCookie('Authentication');
    return response.send({ success: true });
  }
}
