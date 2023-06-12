import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChannelService} from "../../service/__services/channel/channel.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  listUserOfChannel = this.channelService.listUser
  nameGroupe = this.channelService.channelName

  constructor(private activatedRoute: ActivatedRoute, private channelService: ChannelService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( param => this.channelService.getNameChannelById(param['id']) )
    this.activatedRoute.queryParams.subscribe( param => this.channelService.getAllUserByIdChannel(param['id']) )
    console.log(this.listUserOfChannel)
  }

}
