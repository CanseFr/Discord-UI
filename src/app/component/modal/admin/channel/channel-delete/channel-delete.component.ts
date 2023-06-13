import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {FormBuilder} from "@angular/forms";
import {ChannelService} from "../../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel-delete',
  templateUrl: './channel-delete.component.html',
  styleUrls: ['./channel-delete.component.scss']
})
export class ChannelDeleteComponent {
  _id: number;
  _name:string

  constructor(  @Inject(MAT_DIALOG_DATA) data : { name:string,id: number }  ,
                private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    this._id = data.id;
    this._name = data.name
  }

  onSubmit(){
    this.channelService.deleteChannel(this._id)
  }
}
