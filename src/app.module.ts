import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

 

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      database: process.env.DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.PASSWORD,
      autoLoadEntities:true,
      synchronize:true

  }),
    UserModule,
    AuthModule
  ],
})
export class AppModule {}
