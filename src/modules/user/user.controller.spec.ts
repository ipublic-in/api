import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  let repository: Repository<User>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockRepository },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('create', () => {
    it('should return the newly created user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password',
      };

      const createdUser = plainToClass(User, createUserDto);
      createdUser.id = 1;

      jest.spyOn(repository, 'create').mockReturnValue(createdUser);
      jest.spyOn(repository, 'save').mockResolvedValue(createdUser);

      const actualResult = await controller.create(createUserDto);
      expect(actualResult).toEqual(createdUser);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password1',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          password: 'password2',
        },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(users as User[]);

      const actualUsers = await controller.findAll();
      expect(actualUsers).toEqual(users);
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const id = 1;
      const user = {
        id,
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password',
      };

      jest.spyOn(repository, 'findOne').mockResolvedValue(user as User);

      const actualUser = await controller.findOne('' + id);
      expect(actualUser).toEqual(user);
    });
  });

  describe('update', () => {
    it('should update an existing user', async () => {
      const user = new User();
      user.id = 1;
      user.name = 'Jane Doe';
      user.email = 'jane@example.com';
      user.password = 'password2';
      jest.spyOn(service, 'update').mockResolvedValue(user);

      const updateUserDto = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password2',
      };
      const updatedUser = await controller.update('1', updateUserDto);

      expect(updatedUser.name).toEqual('Jane Doe');
      expect(updatedUser.email).toEqual('jane@example.com');
      expect(updatedUser.password).toEqual('password2');
    });

    it('should throw a NotFoundException when the user with the specified ID does not exist', async () => {
      jest.spyOn(service, 'update').mockRejectedValue(new NotFoundException());

      const updateUserDto = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password2',
      };
      expect(controller.update('1', updateUserDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
