import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class MemberService {
  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  async findMemberByLoginAndPassword(
    email: string,
    password: string,
  ): Promise<Member | undefined> {
    // return Member.findOne({ where: { email } });
    return getRepository(Member)
      .createQueryBuilder('member')
      .where('member.email = :email', { email: email })
      .where('member.password = :password', { password: password })
      .getOne();
  }
}
