export class CreateMediaDto {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly filename: string;
  readonly mimetype: string;
  readonly encoding: string;
  readonly user_id: number;
}
