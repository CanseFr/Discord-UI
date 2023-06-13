import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ChannelService} from "../../../../service/__services/channel/channel.service";
import {ChannelAddComponent} from "../../../modal/admin/channel/channel-add/channel-add.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sous-menu-channel',
  templateUrl: './sous-menu-channel.component.html',
  styleUrls: ['./sous-menu-channel.component.scss']
})
export class SousMenuChannelComponent implements OnInit{

  urlChannelSelected = '/home/admin/option/smc/channel?id='
  giveIndexBadgeSelected?:number;

  constructor(private router:Router, private channelService: ChannelService,public dialog: MatDialog) {}

  listChannel = this.channelService.listChannel
  ngOnInit(): void {
    this.channelService.getAllChannel()
  }

   getIndexBadgeSelected(index:number,indexInfo:number) {
      this.giveIndexBadgeSelected = index+1
      this.router.navigateByUrl!(this.urlChannelSelected + indexInfo)
  }

  // BACK GROUND VIEW
  bg: boolean =true;
  offBg() {this.bg = false }
  onBg() {this.bg = true }

  //__MODAL
  //Creer Channel
  createChannel() {
    const dialogRef = this.dialog.open(ChannelAddComponent);
  }

}
