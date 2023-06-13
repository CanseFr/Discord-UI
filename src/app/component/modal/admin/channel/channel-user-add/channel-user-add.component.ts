import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../../../../service/__services/user/user.service";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChannelService} from "../../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel-user-add',
  templateUrl: './channel-user-add.component.html',
  styleUrls: ['./channel-user-add.component.scss']
})
export class ChannelUserAddComponent {
  listUserService = this.userSrevice.usersList
  _idGChannel?:number


  constructor(  @Inject(MAT_DIALOG_DATA)data : { idchannel:number },
                private userSrevice: UserService,
                private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    this._idGChannel = data.idchannel
  }

  formulaire:FormGroup = this.formBuilder.group({
    idUser: ["", [Validators.required] ],
  })

  ngOnInit(): void {
    this.userSrevice.getAllUser()
  }

  onSubmit(){
    if(this.formulaire.valid){
      this.channelService.addUnitUserToChannel(this.formulaire.value.idUser,this._idGChannel! )
      }
    }
}
