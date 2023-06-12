import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, tap} from "rxjs";
import {GroupeService} from "../../../../service/__services/groupe/groupe.service";
import {ChannelService} from "../../../../service/__services/channel/channel.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

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

  constructor(private channelService: ChannelService) {}

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
}
