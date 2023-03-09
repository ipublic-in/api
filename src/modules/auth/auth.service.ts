import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { MemberService } from '../member/member.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  async validateMember(email: string, password: string): Promise<any> {
    const member = await this.memberService.findMemberByLoginAndPassword(email, password);

    if (!member) throw new BadRequestException();

    // if (!(await bcrypt.compare(password, user.password)))
      // throw new UnauthorizedException();

    return member;
  }

  generateToken(member: any) {
    return {
      access_token: this.jwtService.sign({
        name: member.name,
        sub: member.id,
      }),
    };
  }
}
