import { UserDto } from './interfaces/User.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'we get all users';
  }

  @Post()
  create(@Body() userDto: UserDto) {
    return userDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `we get the user with the id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `we update the user with the id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `we delete the user with the id ${id}`;
  }
}
