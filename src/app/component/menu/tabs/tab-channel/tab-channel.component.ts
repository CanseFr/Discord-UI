import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, tap} from "rxjs";
import {GroupeService} from "../../../../service/__services/groupe/groupe.service";
import {ChannelService} from "../../../../service/__services/channel/channel.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserAddUserComponent} from "../../../modal/admin/user/user-add-user/user-add-user.component";
import {ChannelAddComponent} from "../../../modal/admin/channel/channel-add/channel-add.component";
import {MatDialog} from "@angular/material/dialog";
import {AddUserToGroupeComponent} from "../../../modal/admin/groupe/add-user-to-groupe/add-user-to-groupe.component";
import {ChannelDeleteComponent} from "../../../modal/admin/channel/channel-delete/channel-delete.component";
import {
  ChannelModifyNameComponent
} from "../../../modal/admin/channel/channel-modify-name/channel-modify-name.component";
import {ChannelUserAddComponent} from "../../../modal/admin/channel/channel-user-add/channel-user-add.component";
import {
  ChannelUserDeleteComponent
} from "../../../modal/admin/channel/channel-user-delete/channel-user-delete.component";
import {
  ChannelGroupeDeleteComponent
} from "../../../modal/admin/channel/channel-groupe-delete/channel-groupe-delete.component";
import {ChannelGroupeAddComponent} from "../../../modal/admin/channel/channel-groupe-add/channel-groupe-add.component";

@Component({
  selector: 'app-tab-channel',
  templateUrl: './tab-channel.component.html',
  styleUrls: ['./tab-channel.component.scss']
})
export class TabChannelComponent  {

  @Input()nameChannel:any
  @Input()listUserOfChannel:any
  @Input()listGroupeOfChannel:any
  dataSourceUser!: MatTableDataSource<any>;
  dataSourceGroupe!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // DATA User
  nameColumnsUser: string[] = ['ID', 'Nom', 'Prénom', 'Email','Action'];
  displayedColumnsUser: string[] = ['id', 'firstname', 'lastname', 'email','action'];
  applyFilterUser(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUser.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUser.paginator) {
      this.dataSourceUser.paginator.firstPage();
    }
  }

  // DATA Groupe
  nameColumnsGroupe: string[] = ['ID', 'Groupe', 'Action'];
  displayedColumnsGroupe: string[] = ['id', 'name', 'action'];
  applyFilterGroupe(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceGroupe.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceGroupe.paginator) {
      this.dataSourceGroupe.paginator.firstPage();
    }
  }

  constructor(private channelService: ChannelService,public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSourceUser.paginator = this.paginator;
    this.dataSourceUser.sort = this.sort;

    this.dataSourceGroupe.paginator = this.paginator;
    this.dataSourceGroupe.sort = this.sort;
  }

  ngOnInit() {
    this.dataSourceUser = new MatTableDataSource(this.listUserOfChannel);
    this.dataSourceGroupe = new MatTableDataSource(this.listGroupeOfChannel);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['listUserOfChannel']){
      this.dataSourceUser = new MatTableDataSource(changes['listUserOfChannel'].currentValue);
    }
    if ( changes['listGroupeOfChannel']){
      this.dataSourceGroupe = new MatTableDataSource(changes['listGroupeOfChannel'].currentValue);
    }
  }


  // MODAL
  // Top
  modifyGroupeName(nameChannel:string, idChannel:number) {
    const dialogRef = this.dialog.open(ChannelModifyNameComponent, {data: {name:nameChannel,id: idChannel}});
  }

  deleteGroupe(nameChannel:string, idChannel:number) {
    const dialogRef = this.dialog.open(ChannelDeleteComponent, {data: {name:nameChannel,id: idChannel}});
  }

  // MIDDLE
  addUserToChannel(idchannel:number) {
    const dialogRef = this.dialog.open(ChannelUserAddComponent, {data: {idchannel:idchannel}});
  }
  deleteUserOfChannel(channelId:number,idUser:number, firstname:string, lastname:string) {
    const dialogRef = this.dialog.open(ChannelUserDeleteComponent, {data: { channelId:channelId,idUser:idUser, firstname:firstname, lastname:lastname }});
  }


  // BOTTOM
  addAllUserGroupeToChannel(idChannel:number) {
    const dialogRef = this.dialog.open(ChannelGroupeAddComponent, {data: { idchannel:idChannel }});
  }
  deleteAllUserGroupeFromChannelByGroupe(idChannel:number, idGroupe:number, nameGroupe:string) {
    const dialogRef = this.dialog.open(ChannelGroupeDeleteComponent, {data: { channelId:idChannel,idGroupe:idGroupe, nameGroupe:nameGroupe }});
  }

}
