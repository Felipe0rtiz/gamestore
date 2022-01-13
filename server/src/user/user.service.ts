import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { User, Game } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcrypt';
import { Console } from 'console';

@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const emailOrNickExists = await this.database.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            nickname: data.nickname,
          },
        ],
      },
    });

    if (emailOrNickExists) {
      throw new ConflictException('Email ou nickname já cadastrados');
    }

    if (data.password !== data.passwordConfirmation) {
      throw new ConflictException('Senhas não conferem');
    }

    delete data.passwordConfirmation;

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.database.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    delete user.password;
    return user;
  }

  async userList(userId: string) {
    const games = await this.database.user.findUnique({
      where: { id: userId },
      include: {
        games: true,
      },
    });
    return games;
  }

  async addList(user: User, gameId: string) {
    const game = await this.database.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException('Jogo não encontrado');
    }

    const userLikedGame = await this.database.user.findUnique({
      where: { id: user.id },
      include: {
        games: true,
      },
    });

    const userGamesList = userLikedGame.games;
    let foundGame = false;

  
    userGamesList.map((game) => {
      if (game.id === gameId) {
        foundGame = true;
      }
    });

    
    if (foundGame) {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          games: {
            disconnect: {
              id: game.id,
            },
          },
        },
      });
      return { message: 'Jogo removido da lista ' };
    } else {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          games: {
            connect: {
              id: game.id,
            },
          },
        },
      });
      return { message: 'Jogo adicionado na lista' };
    }
  }
}