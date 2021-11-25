import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { simpleDecode, simpleEncode } from '../mock/mock.helper';
import { ForgotPasswordDTO, LoginDTO, RegisterDTO, ResetPasswordDTO } from './auth.model';

@Injectable()
export class AuthService {

  preLogin(dto: LoginDTO) {
    return of({ username: dto.username }).pipe(delay(1000));
  }

  login(dto: LoginDTO) {
    return of({ username: dto.username }).pipe(delay(3000));
  }

  register(dto: RegisterDTO) {
    return of({ fullName: dto.fullName, username: dto.userName }).pipe(delay(3000))
  }

  forgotPassword(dto: ForgotPasswordDTO) {
    const now = new Date();
    const token = simpleEncode({
      username: dto.username,
      expired: new Date(now.setDate(now.getDate() + 1)),
    });
    const resetLink = `http://localhost:4200/auth/reset-password?token=${token}`;
    return of({ username: dto.username, link: resetLink });
  }

  resetPassword(dto: ResetPasswordDTO) {
    return of({ username: dto.username, token: 'simpleToken' });
  }

  verifyToken(token: string): Observable<{ result: boolean }> {
    const payload = this.decodeToken(token);
    const expired = new Date(payload.expired);
    if (expired > new Date()) {
      return of({ result: true });
    }
    return throwError({ result: false });
  }

  protected decodeToken(token: string) {
    try {
      return simpleDecode<{username: string, expired: string}>(token);
    } catch (e) {
      console.error(e);
      const old = new Date();
      return {
        username: 'john',
        expired: new Date(old.setDate(old.getDate() - 1)).toISOString()
      };
    }
  }
}
