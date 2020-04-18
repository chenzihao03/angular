import {Component, OnInit} from '@angular/core';

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

  constructor() {
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
    //必须写this
    let username = this.username;
    let password = this.password;
    if (username && password) {
      window.sessionStorage.setItem('token', username);
      window.sessionStorage.setItem('user', username);
    } else {
      alert('登录失败');
    }
  }

}
