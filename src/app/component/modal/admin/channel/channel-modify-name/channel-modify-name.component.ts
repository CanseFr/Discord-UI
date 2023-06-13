import {Component, Inject} from '@angular/core';
import {ChannelService} from "../../../../../service/__services/channel/channel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-channel-modify-name',
  templateUrl: './channel-modify-name.component.html',
  styleUrls: ['./channel-modify-name.component.scss']
})
export class ChannelModifyNameComponent {
  _id: number;
  _name:string
  formulaire!:FormGroup;

  constructor(  @Inject(MAT_DIALOG_DATA) data : {name:string,id: number} ,
                private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    this._id = data.id;
    this._name = data.name

  this.formulaire = this.formBuilder.group({
    nom: [this._name, [Validators.required, Validators.minLength(2),Validators.maxLength(7)] ],
  })
  }


  // Visibility
  optionsVisibility: string[] = ['PUBLIC','PRIVATE'];
  selectedVisibility?:string;


  onSubmit(){
    if(this.formulaire.valid){
      this.channelService.updateNameChannel({id:this._id,name:this.formulaire?.value.nom , visibility :this.selectedVisibility})
    }
  }
}
