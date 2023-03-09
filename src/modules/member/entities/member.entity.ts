import { ApiProperty } from '@nestjs/swagger';
import { stringify } from 'querystring';
import { MemberService } from '../member.service';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  getRepository,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { prototype } from 'events';
import { MemberAccessGroup } from '../../member-access-group/entities/member-access-group.entity';
import { Subprogram } from '../../subprogram/entities/subprogram.entity';
import { Orgnode } from '../../orgnode/entities/orgnode.entity';
import { State } from '../../state/entities/state.entity';
import { OwEntity2 } from '../../../common/entities/OwEntity2.entity';

@Entity('member')
export class Member extends OwEntity2 {
  @ApiProperty({
    description: 'The PIN of member.',
    example: 'CSJUHENKHT',
  })
  // @PrimaryGeneratedColumn()
  @PrimaryColumn()
  pin: String;

  @ApiProperty({
    description: 'First Name of Member',
    example: 'Joe',
  })
  @Column()
  f_name: String;

  @ApiProperty({
    description: 'Last Name of Member',
    example: 'Doe',
  })
  @Column({
    nullable: true,
  })
  l_name: String;

  @ApiProperty({
    description: 'Middle of Member',
    example: 'K.',
  })
  @Column({
    nullable: true,
  })
  h_name: String;

  @ApiProperty({
    description: 'Title Name of Member',
    example: 'Mr',
  })
  @Column({
    nullable: true,
  })
  title: String;

  @ApiProperty({
    description: 'Email of Member',
    example: 'doe@example.com',
  })
  @Column({
    unique: true,
  })
  email: String;

  @ApiProperty({
    description: 'Group A of Member',
    example: '<groupA>',
  })
  @Column({
    nullable: true,
  })
  group_a: String;

  @ApiProperty({
    description: 'Group B of Member',
    example: '<groupB>',
  })
  @Column({
    nullable: true,
  })
  group_b: String;

  @ApiProperty({
    description: 'Group C of Member',
    example: '<groupC>',
  })
  @Column({
    nullable: true,
  })
  group_c: String;

  @ApiProperty({
    description: 'Group D of Member',
    example: '<groupD>',
  })
  @Column({
    nullable: true,
  })
  group_d: String;

  @ApiProperty({
    description: 'Group E of Member',
    example: '<groupE>',
  })
  @Column({
    nullable: true,
  })
  group_e: String;

  @ApiProperty({
    description: 'Group F of Member',
    example: '<groupF>',
  })
  @Column({
    nullable: true,
  })
  group_f: String;

  @ApiProperty({
    description: 'Extra String A of Member',
    example: 'Extra String A',
  })
  @Column({
    nullable: true,
  })
  extra_string_a: String;

  @ApiProperty({
    description: 'Extra String B of Member',
    example: 'Extra String B',
  })
  @Column({
    nullable: true,
  })
  extra_string_b: String;

  @ApiProperty({
    description: 'Point Rating of Member',
    example: 'owera member point rating',
  })
  @Column({
    nullable: true,
  })
  point_rating: String;

  @ApiProperty({
    description: 'Sin of Member',
    example: 'owera member sin',
  })
  @Column({
    nullable: true,
  })
  sin: String;

  @ApiProperty({
    description: 'Hire Date of Member',
    example: 'Hire Date ',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  hire_date: Date;

  @ApiProperty({
    description: 'Last Login of Member',
    example: 'Last Login',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  last_login: Date;

  @ApiProperty({
    description: 'No  Login of Member',
    example: 'No Login',
  })
  @Column({
    nullable: true,
  })
  no_login: Boolean;

  @ApiProperty({
    description: 'Login Bonus Awarded of Member',
    example: 'Login Bonus Awarded',
  })
  @Column({
    nullable: true,
  })
  login_bonus_awarded: Boolean;

  @ApiProperty({
    description: 'Address_1 of Member',
    example: 'Address_1',
  })
  @Column({
    nullable: true,
  })
  address_1: String;

  @ApiProperty({
    description: 'Address_2 of Member',
    example: 'Address_2',
  })
  @Column({
    nullable: true,
  })
  address_2: String;

  @ApiProperty({
    description: 'City of Member',
    example: 'City',
  })
  @Column({
    nullable: true,
  })
  city: String;

  @ApiProperty({
    description: 'Country ID of Member. Refer to /country for list',
    example: 1,
  })
  @Column({
    nullable: true,
  })
  country: Number;

  @ApiProperty({
    description: 'Postal_code of Member',
    example: '110096',
  })
  @Column({
    nullable: true,
  })
  postal_code: String;

  @ApiProperty({
    description: 'ISD code',
    example: '+91',
  })
  @Column({
    nullable: true,
  })
  mobile_code: String;

  @ApiProperty({
    description: 'Mobile Number',
    example: '8736523481',
  })
  @Column({
    nullable: true,
  })
  mobile_number: String;

  @ApiProperty({
    description: 'Notes of Member',
    example: 'Notes',
  })
  @Column({
    nullable: true,
  })
  notes: String;

  @ApiProperty({
    description: 'Catalogue of Member',
    example: 'Catalouge',
  })
  @Column({
    nullable: true,
  })
  catalouge: String;

  @ApiProperty({
    description: 'Reference Number of Member',
    example: 'Reference Number',
  })
  @Column({
    nullable: true,
  })
  ref_number: String;

  @ApiProperty({
    description: 'Password of Member',
    example: 'Password',
  })
  @Column()
  password: String;

  @ApiProperty({
    description: 'Deleted of Member',
    example: '2022-01-01 23:56:13',
  })
  @Column({
    type: 'timestamp',
  })
  deleted: Date;

  @ApiProperty({
    description: 'Sub Program of Member',
    example: 'ABC Program',
  })
  @Column({
    nullable: true,
  })
  program: String;

  @ApiProperty({
    description: 'Date of Birth of Member',
    example: '2022-01-01 23:56:13',
  })
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  date_of_brth: Date;

  @ApiProperty({
    description: 'Company Name of Member',
    example: 'Company',
  })
  @Column({
    nullable: true,
  })
  company: String;

  @ApiProperty({
    description: 'username of Member',
    example: 'johndoe',
  })
  @Column({
    nullable: true,
  })
  username: String;

  @ApiProperty({
    description: 'tax id of Member',
    example: 'tax Id',
  })
  @Column({
    nullable: true,
  })
  tax_id: String;

  @ApiProperty({
    description: 'Avatar color Member',
    example: 'Avatar Color',
  })
  @Column({
    nullable: true,
  })
  Avatar_color: String;

  @ApiProperty({
    description: 'Points of Member',
    example: 5000,
  })
  @Column({
    default: 0,
  })
  points: Number;

  @ApiProperty({
    description: 'Points on hold of Member',
    example: 50,
  })
  @Column({
    default: 0,
  })
  points_on_hold: Number;

  @ApiProperty({
    description: 'No report of Member',
    example: 'No report',
  })
  @Column({
    nullable: true,
  })
  no_report: Boolean;

  @ApiProperty({
    description: 'Send Spam of Member',
    example: 'Send Spam',
  })
  @Column({
    default: null,
  })
  send_spam: Boolean;

  @ApiProperty({
    description: 'Terms agreed of Member',
    example: 'Terms Agreed',
  })
  @Column({
    nullable: true,
  })
  terms_agreed: Boolean;

  @ApiProperty({
    description: 'URL of Member',
    example: 'URL',
  })
  @Column({
    nullable: true,
  })
  url: String;

  @ApiProperty({
    description: 'Redemption Thresold of Member',
    example: 5000,
  })
  @Column({
    default: 0,
  })
  redemption_thresold: Number;

  // @ApiProperty({
  //   description: 'Created By',
  //   example: 'XD4G87NB',
  // })
  // @Column({
  //   nullable: true,
  //   length: 8,
  // })
  // created_by: String;

  // @ApiProperty({
  //   description: 'Created At',
  //   example: '2022-01-14 18:05:07',
  // })
  // @CreateDateColumn()
  // created_at: Date;

  // @ApiProperty({
  //   description: 'Deleted By',
  //   example: 'XD4G87NB',
  // })
  // @Column({
  //   nullable: true,
  //   length: 8,
  // })
  // deleted_by: String;

  // @ApiProperty({
  //   description: 'Deleted At',
  //   example: '2022-01-14 18:05:07',
  // })
  // @DeleteDateColumn()
  // deleted_at: Date;

  // @ApiProperty({
  //   description: 'Updated By',
  //   example: 'XD4G87NB',
  // })
  // @Column({
  //   nullable: true,
  //   length: 8,
  // })
  // updated_by: String;

  // @ApiProperty({
  //   description: 'Updated At',
  //   example: '2022-01-14 18:05:07',
  // })
  // @UpdateDateColumn()
  // updated_at: Date;

  // @BeforeInsert()
  // async generatePin() {
  //   this.pin = null;
  //   let pin = null;
  //   do {
  //     pin = this.getPin();
  //   } while (
  //     (
  //       await Member.findAndCount({
  //         where: {
  //           pin: pin,
  //         },
  //       })
  //     ).length
  //   );
  //   this.pin = pin;
  // }

  // getPin(charactersLength = 8) {
  //   let result = '';
  //   let characters = 'BCDFGHJKLMNPQRSTVWXYZ';
  //   for (var i = 0; i < characters.length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  @OneToMany(
    () => MemberAccessGroup,
    (MemberAccessGroup) => MemberAccessGroup.member,
  )
  memberAccessGroup: MemberAccessGroup[];

  // @Column()
  // subprogram_id: Number;
  @ApiProperty({
    description: 'Subprogram Id of Member from Relationship ',
    example: 'Subprogram',
  })
  @ManyToOne(() => Subprogram, (Subprogram) => Subprogram.member)
  @JoinColumn({ name: 'subprogram_id' })
  subprogram: Subprogram;

  // @Column({
  //   nullable: true,
  // })
  // orgnode_id: Number;
  @ApiProperty({
    description: 'Orgnode id of Member from Relationship ',
    example: 'Orgnode Id',
  })
  @ManyToOne(() => Orgnode, (Orgnode) => Orgnode.member)
  @JoinColumn({ name: 'orgnode_id' })
  orgnode: Orgnode;

  // @Column({
  //   nullable: true,
  // })
  // state_id: Number;
  @ApiProperty({
    description: 'State ID of Member from Relationship ',
    example: 'State',
  })
  @ManyToOne(() => State, (State) => State.member)
  @JoinColumn({ name: 'state_id' })
  state: State;
}
