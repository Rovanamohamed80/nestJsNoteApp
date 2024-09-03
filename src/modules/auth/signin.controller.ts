import { Body, Controller, Post } from '@nestjs/common';
import { signinDto } from './dto/auth.dto';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
    constructor(private _signinService:SigninService){}
    @Post()
    signin(@Body() body:signinDto){
    return this._signinService.signin(body)
    }
}
