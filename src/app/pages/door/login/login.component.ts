import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../service/__services/auth/auth.service";
import {AuthenticationRequest} from "../../../service/models/authentication-request";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest={};
  errorMessages: Array<string>=[];

  constructor(private router:Router, private authService: AuthService) {}

  // TODO: Regler le push des errors messages en rapport avec le service Auth
  log(){this.login().subscribe((data) => this.errorMessages.push(data.errorMessage))}

  login():Observable<any>{return this.authService.authenticate(this.authRequest)}

  async redirectToRegister(){await this.router.navigate(['register'])}

}
