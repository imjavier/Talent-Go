import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User_data } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ 
    TypeOrmModule.forFeature([User_data]),
    ConfigModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService)=>{

     
        return{
          secret: configService.get('JWT_SECRET'),
          signOptions:{
            expiresIn:'3h'
          }
        }
      }             
    }),
 
  ],
  providers: [AuthService],
  exports: [ AuthService]
})
export class AuthModule {}
