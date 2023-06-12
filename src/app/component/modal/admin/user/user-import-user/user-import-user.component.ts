import {Component, ViewChild} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import * as Papa from 'papaparse';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {NgIf} from "@angular/common";
import {UserService} from "../../../../../service/__services/user/user.service";
@Component({
  selector: 'app-user-import-user',
  templateUrl: './user-import-user.component.html',
  styleUrls: ['./user-import-user.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatExpansionModule, MatIconModule, MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, NgIf,],
})
export class UserImportUserComponent {

  constructor(private userService: UserService) {

  }



//__________________________________PARSING FILE SESSION

  fileName = '';
  acceptFile: boolean = true;
  private splitUrlFile?: Array<string>;
  dataCsvList?: any[];
  importedFileCsv?: File;

  // @ts-ignore
  onFileSelected(event) {// TODO : Retour erreur integré à modal
    this.importedFileCsv = event.target.files[0];
    if (this.importedFileCsv) {// RECUPERATION  FICHIER
      this.fileName = this.importedFileCsv.name;
      this.splitUrlFile = this.fileName.split(".")
      if (this.splitUrlFile[this.splitUrlFile.length - 1] !== "csv") {// ANALYSE CONFORMITE EXTENSION FICHIER
        alert("Veuillez respecter le format CSV pour l'import du fichier !")
      }
      this.acceptFile = false;
    }
  }


// PARSING FIL
  public arrayNewUsers?: Array<any> = [];
  user?: any = undefined

  async parseCsv() {
    this.userService.feedbackImportFileByCsv.next(2)
    if (this.importedFileCsv) {
      Papa.parse(this.importedFileCsv, {
        header: true,
        skipEmptyLines: true,
        complete: (result, file) => {
          this.dataCsvList = result.data;
          for (let i: any = 0; i < this.dataCsvList?.length; i++) {
            this.user = {firstname: this.dataCsvList[i].Nom, lastname: this.dataCsvList[i].Prenom, email: this.dataCsvList[i].Email}
            this.arrayNewUsers!.push(this.user)
          }
          this.serviceAddUsersByCsv(this.arrayNewUsers!)
        }
      });
    }
  }

// SEND TO BACK END

  serviceAddUsersByCsv(listUser:Array<any>){
    this.userService.addUserListByFileCsv(listUser)

  }

}
