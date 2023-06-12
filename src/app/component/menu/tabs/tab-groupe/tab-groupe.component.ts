import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {GroupeService} from "../../../../service/__services/groupe/groupe.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";
import {DeleteGroupeComponent} from "../../../modal/admin/groupe/delete-groupe/delete-groupe.component";
import {ModifyGroupeComponent} from "../../../modal/admin/groupe/modify-groupe/modify-groupe.component";
import {AddUserToGroupeComponent} from "../../../modal/admin/groupe/add-user-to-groupe/add-user-to-groupe.component";
import {
  DeleteUserToGroupeComponent
} from "../../../modal/admin/groupe/delete-user-to-groupe/delete-user-to-groupe.component";

@Component({
  selector: 'app-tab-groupe',
  templateUrl: './tab-groupe.component.html',
  styleUrls: ['./tab-groupe.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, NgIf, AsyncPipe, NgForOf, MatButtonModule, MatIconModule, MatMenuModule]
})
export class TabGroupeComponent implements AfterViewInit, OnInit, OnChanges{

  @Input()listUser :any
  @Input()nameGroupe :any
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private groupeService: GroupeService,public dialog: MatDialog) {}

  ngOnInit() {this.dataSource = new MatTableDataSource(this.listUser);}
  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['listUser']){this.dataSource = new MatTableDataSource(changes['listUser'].currentValue);}
  }


  // TABLE
  nameColumns: string[] = ['ID', 'Nom', 'Prénom', 'Email','Action'];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','action'];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //__MODAL
  deleteGroupe(id:number, name:string) {
    const dialogRef = this.dialog.open(DeleteGroupeComponent, { data : {
        id: id ,
        name: name ,
      }});
  }
  modifyGroupeName(id:number, name:string, visibility: string) {
    const dialogRef = this.dialog.open(ModifyGroupeComponent, { data : {
        id: id ,
        name: name ,
        visibility: visibility,
      }});
  }
  addUserToGroupe(nameGroupe:string, idGroupe:number) {
    const dialogRef = this.dialog.open(AddUserToGroupeComponent, {data: {nameGroupe: nameGroupe, idGroupe: idGroupe}});
  }
  deleteUserToGroupe(id:number, firstname:string, lastname:string, idGroupe : number ,nameGroupe: string, ) {
    const dialogRef =
      this.dialog.open(DeleteUserToGroupeComponent, { data: {idUser: id, nameGroupe:nameGroupe, idGroupe:idGroupe, firstname:firstname, lastname:lastname}});
  }
}
