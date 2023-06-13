import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChannelService} from "../../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel-groupe-delete',
  templateUrl: './channel-groupe-delete.component.html',
  styleUrls: ['./channel-groupe-delete.component.scss']
})
export class ChannelGroupeDeleteComponent {
  _idChannel: number;
  _idGroupe: number;
  _nameGroupe: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: { channelId:number,idGroupe:number, nameGroupe:string },
              private channelService: ChannelService) {
    this._idChannel = data.channelId;
    this._idGroupe = data.idGroupe;
    this._nameGroupe = data.nameGroupe;
  }

  updateChannelByGroupDelete() {
    this.channelService.updateChannelByGroupDelete(this._idChannel , this._idGroupe)
  }
}
