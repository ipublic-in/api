import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe',
    })
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'bob@example.com',
    })
    @IsString()
    readonly email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: 'password',
    })
    @IsString()
    readonly password: string;

    @ApiProperty({
        description: 'Date of birth',
        example: '1990-01-01',
    })
    readonly dob: Date;
}
