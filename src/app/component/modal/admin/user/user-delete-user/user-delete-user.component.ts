import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {UserService} from "../../../../../service/__services/user/user.service";

@Component({
  selector: 'app-user-delete-user',
  templateUrl: './user-delete-user.component.html',
  styleUrls: ['./user-delete-user.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class UserDeleteUserComponent {

    _id: any;
    _firstname: any;
    _lastname: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: { id: number , firstname: string , lastname: string },
              private userService: UserService,
              private router:Router) {
    this._id = data.id;
    this._firstname = data.firstname;
    this._lastname = data.lastname;
  }

  deleteUser(_id: number) {
    this.userService.deleteById(_id).subscribe(i=> this.userService.getAllUser())
  }

}
