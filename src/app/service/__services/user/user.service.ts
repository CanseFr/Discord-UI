import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subscription} from "rxjs";
import {User} from "../../models/user";
import {EnvService} from "../env.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private ENV: EnvService) { }

  // BEHAV OBJECT
  public usersList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public feedbackImportFileByCsv: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public userListByIdGroupe : BehaviorSubject<any> = new BehaviorSubject<any>([])

  // BEHAV END POINT
  userController:string = "/user/";

  // GET ALL BY ID GROUPE
  getAllUserByIdGroupe(idGroupe:number){
    this.http
      .get(this.ENV.root + this.userController + 'allbyid/' + idGroupe)
      .subscribe( data => this.userListByIdGroupe.next(data))
  }

  // GET  ALL
  getAllUser() {
    this.http
      .get<any>(this.ENV.root+this.userController)
      .subscribe(data => this.usersList.next(data) );
  }

  // DELETE UNIT BY ID
  deleteById(id:number){
    return this.http.delete<any>(this.ENV.root + this.userController+id)
  }

  // PATCH UNIT BY ID
  modifyById(user:any){
    return this.http.patch<any>(this.ENV.root + this.userController, user)
  }

  // ADD UNIT USER
  addUser(body:any){
    return this.http.post<any>(this.ENV.root + this.userController + "addunituserbyadmin", body)
  }

  // ADD USERS BY CSV FILE
  addUserListByFileCsv(body:Array<any>):Subscription{
    return this.http.post<any>(this.ENV.root + this.userController + "addUsersByCsvFile",body)
      .subscribe((data) => this.feedbackImportFileByCsv.next(data))
  }

}
