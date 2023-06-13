import {Component, Inject, OnInit} from '@angular/core';
import {ChannelService} from "../../../../../service/__services/channel/channel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupeService} from "../../../../../service/__services/groupe/groupe.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../../../../service/__services/user/user.service";

@Component({
  selector: 'app-channel-groupe-add',
  templateUrl: './channel-groupe-add.component.html',
  styleUrls: ['./channel-groupe-add.component.scss']
})
export class ChannelGroupeAddComponent implements OnInit{

  optionsGroupeList = this.groupeService.groupesList
  _idChannel?:number
  selectedGroupeList?:number;


  constructor(  @Inject(MAT_DIALOG_DATA)data : { idchannel:number },
                private groupeService: GroupeService,
                private channelService: ChannelService,
                private formBuilder: FormBuilder) {
    this._idChannel = data.idchannel
  }

  formulaire:FormGroup = this.formBuilder.group({
    idGroupe: ["", [Validators.required] ],
  })

  ngOnInit(): void {
    this.groupeService.getAllGroupe()
  }

  onSubmit(){
    this.channelService.addUnitGroupeToChannel(this.selectedGroupeList!,this._idChannel!)
  }
}
