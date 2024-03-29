import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User_data } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User_data)
    private readonly userRepository:Repository<User_data>,
    private readonly authService: AuthService
  ){}
  

  async create(createUserDto: CreateUserDto) {

    const roleRepository = this.userRepository.manager.getRepository('UserRole');
    const userRole = await  roleRepository.findOne({where:{role_name: 'normal'}});

    const {password, ...userData} = createUserDto;

    const user = {
      ...userData,
      password: this.authService.encryptPassword(password),
      roles:[userRole]
        
    }

    const userSaved = await this.userRepository.save(user);

    const payload={
      id: userSaved.user_id,
      rol:userSaved.roles
    };

    const token = await this.authService.generateJWT(payload);

    return token;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
