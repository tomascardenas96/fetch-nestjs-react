import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUser: CreateUserDto) {
    try {
      const newUser: User = this.userRepository.create({
        name: createUser.name,
        lastname: createUser.lastname,
        address: createUser.address,
      });
      return this.userRepository.save(newUser);
    } catch (err) {}
  }

  findUsers() {
    try {
      return this.userRepository.find();
    } catch (err) {}
  }

  async findUserById(userId: number) {
    try {
      const foundUser = await this.userRepository.findOne({
        where: { userId },
      });

      console.log(foundUser);

      if (!foundUser) {
        throw new NotFoundException('User not found');
      }

      return foundUser;
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }
    }
  }
}
