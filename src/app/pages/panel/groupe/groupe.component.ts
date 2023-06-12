import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GroupeService} from "../../../service/__services/groupe/groupe.service";
import {UserService} from "../../../service/__services/user/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private groupeService: GroupeService) {}

  listUser = this.groupeService.groupeUserList
  nameGroupe = this.groupeService.groupesName

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=> {
      this.groupeService.getNameGroupeById(params['id'])
      this.groupeService.getAllUserByIdGroupe(params['id'])
    } );
  }

}
