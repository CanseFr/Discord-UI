import {Component, Inject} from '@angular/core';
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modify-groupe',
  templateUrl: './modify-groupe.component.html',
  styleUrls: ['./modify-groupe.component.scss']
})
export class ModifyGroupeComponent {
  body?:any
  _id: number
  _name:string
  _visibility:string
  formulaire!:FormGroup;

  constructor(  @Inject(MAT_DIALOG_DATA) data : { id: number, name:string, visibility:string }  ,
                private groupeService: GroupeService,
                private formBuilder: FormBuilder) {
    this._id = data.id;
    this._name = data.name
    this._visibility = data.visibility

      this.formulaire = this.formBuilder.group({
        name: [this._name, [Validators.required, Validators.minLength(2),Validators.maxLength(10)] ],
        visibility: [this._visibility, [] ],
      })
  }

  // CHANNEL
  optionsVisibility: string[] = ['PUBLIC', 'PRIVATE'];
  selectedVisibility?:string = 'PUBLIC';

  onSubmit(){ // TODO : Refresh tab on modify
    if(this.formulaire.valid){
      this.groupeService.modifyGroupeName({id: this._id,...this.formulaire.value })
        .subscribe( x =>{
            this.groupeService.getAllGroupe()
            this.groupeService.getNameGroupeById(this._id)
        })
    }
  }
}
