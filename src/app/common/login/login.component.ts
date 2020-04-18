import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  today = new Date();
  timer = null;
  username = null;
  password = null;

  constructor(private notification: NzNotificationService, public router: Router) {
    this.timer = setInterval(() => {
      this.today = new Date();
    }, 1000);
    // this.authService.logout().subscribe((data) => {
    //   clearInterval(this.timer);//销毁
    // });
  }

  ngOnInit(): void {

  }

  doLogin() {
    let username = this.username;
    let password = this.password;
    if (username && password) {
      window.sessionStorage.setItem('token', username);
      window.sessionStorage.setItem('user', username);
      this.router.navigate(['/home']);
    } else {
      this.notification.create(
        'error',
        '登录失败',
        '请输入用户名和密码！'
      );
    }
  }
}
