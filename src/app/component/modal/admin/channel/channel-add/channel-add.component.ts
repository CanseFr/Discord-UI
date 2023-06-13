import { Component } from '@angular/core';
import {UserService} from "../../../../../service/__services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChannelService} from "../../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel-add',
  templateUrl: './channel-add.component.html',
  styleUrls: ['./channel-add.component.scss']
})
export class ChannelAddComponent {

  constructor(  private channelService: ChannelService,
                private formBuilder: FormBuilder) {}


  formulaire:FormGroup = this.formBuilder.group({
    nom: ["", [Validators.required, Validators.minLength(2),Validators.maxLength(7)] ],
  })

  // Visibility
  optionsVisibility: string[] = ['PUBLIC','PRIVATE'];
  selectedVisibility?:string;


  onSubmit(){
    if(this.formulaire.valid){
      this.channelService.createGroupe({name:this.formulaire.value.nom, visibility :this.selectedVisibility})
    }
  }
}
