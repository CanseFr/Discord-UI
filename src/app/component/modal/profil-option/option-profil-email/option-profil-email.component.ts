import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../../../service/__services/user/user.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-option-profil-email',
  templateUrl: './option-profil-email.component.html',
  styleUrls: ['./option-profil-email.component.scss']
})
export class OptionProfilEmailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) data: { id: number , firstname: string , lastname: string, mail:string },
              private userService: UserService,
              private formBuilder: FormBuilder) {}

}
