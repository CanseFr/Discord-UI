import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  OptionProfilPasswordComponent
} from "../../component/modal/profil-option/option-profil-password/option-profil-password.component";
import {
  OptionProfilEmailComponent
} from "../../component/modal/profil-option/option-profil-email/option-profil-email.component";
import {
  OptionProfilInfopersoComponent
} from "../../component/modal/profil-option/option-profil-infoperso/option-profil-infoperso.component";

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {

  constructor(public dialog: MatDialog) {
  }

  // role:string = this.jwt.decodeToken(localStorage.getItem('token')!).authorities[0].authority

  //__MODAL
  //PASSWORD
  modifyPassword() {
    const dialogRef = this.dialog.open(OptionProfilPasswordComponent);
  }
  //EMAIL
  modifyEmail() {
    const dialogRef = this.dialog.open(OptionProfilEmailComponent);
  }

  //INFO PERSO
  modifyInfoPerso() {
    const dialogRef = this.dialog.open(OptionProfilInfopersoComponent);
  }
}
