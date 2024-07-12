import { Controller, Post, Body, Req, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from './user.guard';

@Controller('user')
export class UserController {

    constructor (
        private readonly userService: UserService
    ){}

    @Post("login")
    async login(@Body() user: LoginUserDto) {
        return await this.userService.findOne(user)
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    async profile(@Req() req) {
        return req.user;
    }

}
