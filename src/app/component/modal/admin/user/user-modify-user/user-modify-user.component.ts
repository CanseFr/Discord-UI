import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../../../../service/__services/user/user.service";
import {Router} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-modify-user',
  templateUrl: './user-modify-user.component.html',
  styleUrls: ['./user-modify-user.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class UserModifyUserComponent {

  _id?: number;
  body?:any;
  formulaire!: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) data: { id: number , firstname: string , lastname: string, mail:string },
              private userService: UserService,
              private formBuilder: FormBuilder) {

    this._id = data.id

    this.formulaire = this.formBuilder.group({
      firstname: [data.firstname, [Validators.required, Validators.minLength(3),Validators.maxLength(20)] ],
      lastname: [data.lastname, [Validators.required, Validators.minLength(3),Validators.maxLength(20)] ],
      email: [data.mail, [Validators.required,Validators.email] ]
    })
  }

  onSubmit(){
    if(this.formulaire.valid){
      this.body = {id:this._id, firstname: this.formulaire.value.firstname, lastname: this.formulaire.value.lastname, email:this.formulaire.value.email}
      this.userService.modifyById(this.body).subscribe(x => this.userService.getAllUser())
    }
  }

}
