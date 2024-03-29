import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User_data } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './entities/role.entity';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forFeature([UserRole,User_data]),AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
