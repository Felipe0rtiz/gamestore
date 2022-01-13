import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from '@prisma/client';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateManyGamesDto } from './dto/create-many-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private service: GameService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() data: CreateGameDto): Promise<Game> {
    return this.service.create(data);
  }

  @Post('createMany')
  @ApiOperation({
    summary: 'Criar vários jogos',
  })
  async createMany(@Body() data: CreateManyGamesDto) {
    return this.service.createMany(data);
  }

  @Get('findMany')
  @ApiOperation({
    summary: 'Listar todos os jogos cadastrados',
  })
  findMany(): Promise<Game[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  @ApiOperation({
    summary: 'Procurar um jogo pelo ID',
  })
  async findUnique(@Param('id') id: string): Promise<Game> {
    return this.service.findUnique(id);
  }
}
