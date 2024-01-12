import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    public async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const user = {
            ...createUserDto,
            password: await this.hashPassword(createUserDto.password),
        };

        return await this.userRepository.save(user);
    }

    public async findAll(): Promise<Array<UserEntity>> {
        return await this.userRepository.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} ${updateUserDto}user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    private async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await hash(password, saltOrRounds);
    }
}
