import { Component } from '@angular/core';
import {UserService} from "../../../../../service/__services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.scss']
})
export class AddGroupeComponent {
  body?:any

  constructor(  private groupeService: GroupeService,
                private formBuilder: FormBuilder) {}

  ngOnInit() {
// TODO : Charger data
  }

  formulaire:FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(2),Validators.maxLength(10)] ],
    visibility: ["", []],
  })

  // CHANNEL
  optionsVisibility: string[] = ['PUBLIC', 'PRIVATE'];
  selectedVisibility?:string;


  onSubmit(){
    if(this.formulaire.valid){ // TODO : Channel => visibility (penser a modifier)
      this.groupeService.createGroupe({...this.formulaire.value,channel:this.selectedVisibility}).subscribe( x => this.groupeService.getAllGroupe())
    }
  }
}
