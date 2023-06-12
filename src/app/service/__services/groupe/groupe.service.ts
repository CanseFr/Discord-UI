import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../env.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";
import {GroupeDto} from "../../models/groupe-dto";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient, private ENV: EnvService) { }

  // Behav Object
  public groupesList: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public groupesName: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public groupeUserList: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  // END POINT
  groupeController:string = "/groupe/";

  getAllGroupe(){
    this.http
      .get<any>(this.ENV.root + this.groupeController)
      .subscribe( data => this.groupesList.next(data))
  }

  getAllUserByIdGroupe(id:number){
    this.http
      .get<any>(this.ENV.root + '/user/allbyid/' + id)
      .subscribe( data => this.groupeUserList.next(data))
  }

  getNameGroupeById(id:number){
    this.http
      .get<any>(this.ENV.root + this.groupeController + id)
      .subscribe( data => this.groupesName.next(data))
  }

  createGroupe(body:any){
    return this.http.post<any>(this.ENV.root + this.groupeController , body)
  }

  deleteGroupe(id:any){
    return this.http.delete<any>(this.ENV.root + this.groupeController + id)
  }

  modifyGroupeName(body:any){ // Name
    return this.http.patch<any>(this.ENV.root + this.groupeController + 'patchname', body)
  }

  addUserToGroupe(body:any){
    return this.http.patch<any>(this.ENV.root + this.groupeController, body )
  }

  deleteUserOfGroupe(body:any){
    return this.http.patch<any>(this.ENV.root + this.groupeController + 'deleteUserFromGroupe' ,body)
  }

}
