import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credenciales={
    user:'',
    contrasena:''
  }
  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.credenciales).subscribe(data => {
      this.loginService.setToken(data.token);
      this.router.navigateByUrl('/estadistica');
    });
  }

}
