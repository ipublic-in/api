import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateRatingDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  mediaId: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
