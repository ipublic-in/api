import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateRatingDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
