import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../../../../service/__services/user/user.service";
import {Router} from "@angular/router";
import {ChannelService} from "../../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel-user-delete',
  templateUrl: './channel-user-delete.component.html',
  styleUrls: ['./channel-user-delete.component.scss']
})
export class ChannelUserDeleteComponent {

  _idChannel: any;
  _idUser: any;
  _firstname: any;
  _lastname: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: { channelId:number,idUser:number, firstname:string, lastname:string },
              private channelService: ChannelService) {
    this._idChannel = data.channelId;
    this._idUser = data.idUser;
    this._firstname = data.firstname;
    this._lastname = data.lastname;
  }

  deleteUser() {
    this.channelService.deleteUnitUserOfMemberList(this._idChannel,this._idUser)
  }
}
