import {Injectable} from '@angular/core';

@Injectable()
export class LoginAuthService {
  private headers = new Headers({'Content-Type': 'application/json;'});
  // private options = new RequestOptions({headers: this.headers});

  // constructor(private http: Http) {
  // }

  // 是否登录
  public isLogin(): boolean {
    const token = window.sessionStorage.getItem('token');

    return this.isTokenExpired(token);
  }

  //利用http请求判断用户是否登录或token是否过期
  private isTokenExpired(token: string): boolean {
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
