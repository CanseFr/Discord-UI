import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from "@angular/material/dialog";
import {UserAddUserComponent} from "../../../modal/admin/user/user-add-user/user-add-user.component";
import {MatButtonModule} from "@angular/material/button";
import {UserDeleteUserComponent} from "../../../modal/admin/user/user-delete-user/user-delete-user.component";
import {UserModifyUserComponent} from "../../../modal/admin/user/user-modify-user/user-modify-user.component";
import {UserImportUserComponent} from "../../../modal/admin/user/user-import-user/user-import-user.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {UserService} from "../../../../service/__services/user/user.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FeedbackCsvComponent} from "../../../modal/admin/user/feedback-csv/feedback-csv.component";
import {MatMenuModule} from "@angular/material/menu";


@Component({
  selector: 'app-tab-user',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, NgIf, MatIconModule, MatProgressBarModule, AsyncPipe, UserAddUserComponent, MatMenuModule]
})

export class UserTabComponent implements AfterViewInit,OnInit, OnChanges{


  @Input() AllUser?:any;
  feedBackCsvImport  = this.userService.feedbackImportFileByCsv
  popFeedBack() {
    const dialogRef = this.dialog.open(FeedbackCsvComponent);
  }




  constructor(public dialog: MatDialog,private userService: UserService) {
    this.dataSource = new MatTableDataSource(this.AllUser);
  }


  ngOnInit() {
    this.showTable()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['AllUser']){this.dataSource = new MatTableDataSource(changes['AllUser'].currentValue);}
  }


//______TAB
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
    //Structure Tab
    listUser:Array<any> = [] ;
    nameColumns: string[] = ['ID', 'Nom', 'Prénom', 'Email','Action']; // TODO Rajouter promo
    displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','action'];
    // Methode
    showTable(){
      const users:any = this.AllUser;
      this.dataSource = new MatTableDataSource(users);
    }


  //__MODAL
      //ADD
  addUser() {
    const dialogRef = this.dialog.open(UserAddUserComponent);
  }
      //DELETE
  deleteUser(id:number,lastname:string,firstname:string) {
    const dialogRef = this.dialog.open(UserDeleteUserComponent, {
      data: {
        id: id ,
        firstname: firstname ,
        lastname: lastname
      }
    });
  }
      //MODIFY
  modifyUser(id:number,lastname:string,firstname:string,mail:string) {
    const dialogRef = this.dialog.open(UserModifyUserComponent, {
      data: {
        id: id ,
        firstname: firstname ,
        lastname: lastname,
        mail: mail
      }
    });
  }
      //IMPORT
  importUser() {
    const dialogRef = this.dialog.open(UserImportUserComponent);
  }


  initFeeback() {
    this.feedBackCsvImport.next(0)
  }
}

