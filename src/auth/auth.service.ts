import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {


  constructor(
    private jwtAuthService: JwtService
  ){}

  async generateJWT(payload){

    return await this.jwtAuthService.signAsync({payload});

  }
  
  encryptPassword(password: string){
    return bcrypt.hashSync(password,10);
  }



  create(createAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
