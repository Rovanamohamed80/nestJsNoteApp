import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let {token} = request.headers
    if(!token){
      throw new UnauthorizedException();
    }
    try {
      const payload = await this._jwtService.verify(token,{secret:"nestNoteApp"});
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }

  }

}

