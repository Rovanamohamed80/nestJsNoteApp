import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SigninService } from './signin.service';
import { SigninController } from './signin.controller';
import { SignupController } from './signup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forFeature([{ name:User.name, schema: UserSchema }])],
  providers: [SignupService, SigninService,JwtService],
  controllers: [SigninController, SignupController]
})
export class AuthModule { }

