import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../service/__services/user/user.service";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-to-groupe',
  templateUrl: './add-user-to-groupe.component.html',
  styleUrls: ['./add-user-to-groupe.component.scss']
})
export class AddUserToGroupeComponent implements OnInit{

  listUserService = this.userSrevice.usersList
  _nameGroupe?:string;
  _idGroupe?:number


  constructor(  @Inject(MAT_DIALOG_DATA)data : { nameGroupe: string, idGroupe:number },
                private userSrevice: UserService,
                private groupeService: GroupeService,
                private formBuilder: FormBuilder) {
    this._nameGroupe = data.nameGroupe
    this._idGroupe = data.idGroupe
  }

  formulaire:FormGroup = this.formBuilder.group({
    idUser: ["", [Validators.required] ],
  })

  ngOnInit(): void {
    this.userSrevice.getAllUser()
  }

  onSubmit(){
    if(this.formulaire.valid){
      this.groupeService.addUserToGroupe({idUserToAdd: this.formulaire.value.idUser,name:this._nameGroupe}).subscribe( x => {
        this.groupeService.getAllUserByIdGroupe(this._idGroupe!)
      })
    }
  }

}
