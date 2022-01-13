import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateManyGamesDto } from './dto/create-many-game.dto';
import { Game } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private database: PrismaService) {}

  async create(data: CreateGameDto): Promise<Game> {
    const game = await this.database.game.create({
      data,
    });
    return game;
  }

  async createMany(data: CreateManyGamesDto) {
    const createdGames = [];

    data.games.map(async (game) => {
      const gameExist = await this.findPerName(game.name);

      if (!gameExist) {
        const created = await this.create(game);
        createdGames.push(created);
      }
    });

    return createdGames;
  }

  async findPerName(name: string): Promise<Game> {
    const game = await this.database.game.findFirst({
      where: { name: name },
    });
    return game;
  }

  async findMany(): Promise<Game[]> {
    const games = await this.database.game.findMany();
    return games;
  }

  async findUnique(id: string): Promise<Game> {
    const game = await this.database.game.findUnique({
      where: { id },
    });

    if (!game) {
      throw new NotFoundException('ID não encontrado');
    }

    return game;
  }
}