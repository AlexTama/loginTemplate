import { Component, OnInit } from '@angular/core';
import { BasicLoginServiceService } from 'src/app/services/basic-login-service.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.css']
})
export class BasicLoginComponent implements OnInit {

  errorMessage = "Invalid credentials";
  messageError = false;

  persona = {
    username: "",
    password: ""
  }

  constructor(
    private loginService: BasicLoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  handleLogin() {
    let response = this.loginService.getLoginAccess(this.persona.username, this.persona.password);
    if (response) {
      this.messageError = false;
      this.router.navigate(['admin/dashboard', this.persona.username]);
    } else {
      this.messageError = true;
      this.router.navigate(['login/basic']);
    }  
  }

}
