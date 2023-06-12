import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ChannelService} from "../../../../service/__services/channel/channel.service";

@Component({
  selector: 'app-sous-menu-channel',
  templateUrl: './sous-menu-channel.component.html',
  styleUrls: ['./sous-menu-channel.component.scss']
})
export class SousMenuChannelComponent implements OnInit{

  listInfoBadgeGroupe:Array<any>=[
    {title:"C1",picto:"people", indexInfo : 1},
    {title:"C2",picto:"people", indexInfo :2},
    {title:"C3",picto:"people", indexInfo : 3},
    {title:"C4",picto:"people", indexInfo : 4}
  ]

  urlChannelSelected = '/home/admin/option/smc/channel?id='
  giveIndexBadgeSelected?:number;

  constructor(private router:Router, private channelService: ChannelService) {}

  listChannel = this.channelService.listChannel
  ngOnInit(): void {
    this.channelService.getAllChannel()
  }

  async getIndexBadgeSelected(index:number,indexInfo:number) {
    this.giveIndexBadgeSelected = index+1
    await this.router.navigateByUrl(this.urlChannelSelected + this.giveIndexBadgeSelected)
  }

  // BACK GROUND VIEW
  bg: boolean =true;
  offBg() {this.bg = false }
  onBg() {this.bg = true }


}
