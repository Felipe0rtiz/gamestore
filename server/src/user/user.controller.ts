import {
  Body,
  Controller,
  Patch,
  Post,
  UseGuards,
  Param,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser } from '../auth/auth-user.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Criar um usuário',
  })
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }

  @UseGuards(AuthGuard())
  @Get('userList')
  @ApiOperation({
    summary: 'Ver a lista de jogos favoritos do usuário',
  })
  @ApiBearerAuth()
  userList(@AuthUser() user: User) {
    return this.service.userList(user.id);
  }

  @UseGuards(AuthGuard())
  @Patch('addList/:id')
  @ApiOperation({
    summary: 'Adicionar um jogo na lista de um usuário, ou remover',
  })
  @ApiBearerAuth()
  addList(@AuthUser() user: User, @Param('id') gameId: string) {
    return this.service.addList(user, gameId);
  }
}