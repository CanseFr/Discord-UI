import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {filter} from "rxjs";
import {GroupeService} from "../../../../service/__services/groupe/groupe.service";
import {AddGroupeComponent} from "../../../modal/admin/groupe/add-groupe/add-groupe.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sous-menu-groupe',
  templateUrl: './sous-menu-groupe.component.html',
  styleUrls: ['./sous-menu-groupe.component.scss']
})
export class SousMenuGroupeComponent implements OnInit{

  urlRouteGroupeSelected = '/home/admin/option/smg/groupe?id=';
  giveIndexBadgeSelected?:any;

  constructor(private router:Router, private groupeService:GroupeService,public dialog: MatDialog) {}
  listGroupe= this.groupeService.groupesList

  ngOnInit(): void {
    this.groupeService.getAllGroupe()
  }


   getIndexBadgeSelected(index:number,indexInfo:number) {
      this.giveIndexBadgeSelected = index +1
      this.router.navigateByUrl(this.urlRouteGroupeSelected + indexInfo)
      this.groupeService.getNameGroupeById(indexInfo)
  }

  // BACK GROUND VIEW
  bg: boolean =true;
  offBg() {this.bg = false }
  onBg() {this.bg = true }

  //__MODAL
  //ADD
  addGroupe() {
    const dialogRef = this.dialog.open(AddGroupeComponent);
  }


}
