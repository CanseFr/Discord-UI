import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroupeService} from "../../../service/__services/groupe/groupe.service";
import {ChannelService} from "../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private channelService: ChannelService) {}

  nameChannel = this.channelService.channelName
  listAllUserOfChannel = this.channelService.listUser
  listAllGroupesOfChannel = this.channelService.listGroupesOfChannel

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(( params => {
      this.channelService.getNameChannelById(params['id'])
      this.channelService.getAllUserByIdChannel(params['id'])
      this.channelService.getAllGroupeOfChannel(params['id'])
    }))
  }
}


