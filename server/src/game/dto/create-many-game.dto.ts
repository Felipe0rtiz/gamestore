import { CreateGameDto } from './create-game.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateManyGamesDto {
  @IsNotEmpty()
  @ApiProperty()
  games: CreateGameDto[];
}
