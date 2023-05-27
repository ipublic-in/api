import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
    })
    name: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'bob@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'password',
    })
    password: string;

    @ApiProperty({
        description: 'Date of birth',
        example: '1990-01-01',
    })
    dateOfBirth: Date;
}
