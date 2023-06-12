import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu-option',
  templateUrl: './admin-menu-option.component.html',
  styleUrls: ['./admin-menu-option.component.scss']
})
export class AdminMenuOptionComponent {

  listInfoBadge:Array<any>=[
    {title:"Utilisateur",picto:"person", indexInfo : 1, url:"/home/admin/option/user/tab"},
    {title:"Groupe",picto:"people", indexInfo :2, url:"/home/admin/option/smg" },
    {title:"Channel",picto:"cast", indexInfo : 3, url:"/home/admin/option/smc"},
    {title:"Statistique",picto:"show_chart", indexInfo : 4, url:"/home/admin/option/stat"}
  ]
  constructor(private router:Router) {
  }

  giveIndexBadgeSelected?:number;
  getIndexBadgeSelected(index:number) {
     this.giveIndexBadgeSelected = index+1;
     this.router.navigateByUrl(this.listInfoBadge[index].url)
  }

  // BACK GROUND VIEW
  bg: boolean =true;
  offBg() {this.bg = false }
  onBg() {this.bg = true }

}
