import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ChannelService} from "../../service/__services/channel/channel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private channelservice: ChannelService) {
  }

  ngOnInit(){
    this.checkIfAdmin()
    this.getName()
    this.channelservice.getAllChannel()
  }

  // CHANNEL CHAT
  listChannelChat = this.channelservice.listChannel

  // Affiche Lettre User Badge
    nameUserForBadge:string = new JwtHelperService().decodeToken(localStorage.getItem('token')!).fullName.charAt(0).toUpperCase();

  firstname!:string;
  lastname!:string;
  nameByToken:string = new JwtHelperService().decodeToken(localStorage.getItem('token')!).fullName;

  getName(){
    this.firstname = this.nameByToken.split(' ')[0]
    this.lastname = this.nameByToken.split(' ')[1]
  }

  // Deconnexion
    deconect(){
      localStorage.clear()
      this.router.navigateByUrl("")
    }

  // Light Mode
  lighting:string='Dark'
  lightMode(){
      if (this.lighting == 'Dark'){
        this.lighting = 'Light'
      } else {
        this.lighting = 'Dark'
      }
  }

  // Admin Check
    role?:boolean=false;
    tokenGetRole?:string;

    checkIfAdmin(){
      this.tokenGetRole = new JwtHelperService().decodeToken(localStorage.getItem('token')!).authorities[0].authority
      if ( this.tokenGetRole == 'ROLE_ADMIN' ){this.role = true}
    }

  // Background view
    bg: boolean =true;
    offBg() {this.bg = false }
    onBg() {this.bg = true }


  redirect(id:number) {
    this.router.navigateByUrl("/home/user/chat?id=" + id)
    console.log(id)
  }
}
