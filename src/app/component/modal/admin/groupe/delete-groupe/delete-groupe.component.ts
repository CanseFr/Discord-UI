import {Component, Inject} from '@angular/core';
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-groupe',
  templateUrl: './delete-groupe.component.html',
  styleUrls: ['./delete-groupe.component.scss']
})
export class DeleteGroupeComponent {
   _id: number;
   _name:string

  constructor(  @Inject(MAT_DIALOG_DATA) data : { id: number, name:string }  ,
                private groupeService: GroupeService,
                private formBuilder: FormBuilder) {
    this._id = data.id;
    this._name = data.name
  }

  onSubmit(){
      this.groupeService.deleteGroupe(this._id).subscribe( x => {
        this.groupeService.getAllGroupe()
      })
  }

}
