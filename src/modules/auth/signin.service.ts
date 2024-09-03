import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync } from 'bcrypt';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {

    constructor(@InjectModel(User.name) private userModel: Model<User>, private _jwtService:JwtService) { }
    signin=async(user:any)=>{
        let isUser =await this.userModel.findOne({email:user.email})
        if(!(isUser && compareSync(user.password,isUser.password))) 
        throw new HttpException('incorrect email or password', HttpStatus.UNAUTHORIZED) 
        let token = this._jwtService.sign({name:isUser.name,userId:isUser._id},{secret:"nestNoteApp"})
        return {message:"success" ,token:token}
      }
}
