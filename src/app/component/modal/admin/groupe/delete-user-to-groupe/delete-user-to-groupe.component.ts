import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-delete-user-to-groupe',
  templateUrl: './delete-user-to-groupe.component.html',
  styleUrls: ['./delete-user-to-groupe.component.scss']
})
export class DeleteUserToGroupeComponent {

  // idUser
  _idUser: number;
  _firstname?:string
  _lastname?:string
  _nameGroupe?: string
  _idGroupe?: number

  constructor(  @Inject(MAT_DIALOG_DATA) data : { idUser:number, firstname:string, lastname:string, nameGroupe: string, idGroupe : number }  ,
                private groupeService: GroupeService,
                private formBuilder: FormBuilder) {
    this._idUser = data.idUser;
    this._firstname = data.firstname
    this._lastname = data.lastname
    this._nameGroupe = data.nameGroupe
    this._idGroupe = data.idGroupe
  }

  onSubmit() {
    this.groupeService.deleteUserOfGroupe({id : this._idGroupe,idUserToDelete : this._idUser})
      .subscribe(x => {
        this.groupeService.getAllUserByIdGroupe(this._idGroupe!)
      })
  }
}
