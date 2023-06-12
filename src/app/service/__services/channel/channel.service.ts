import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../env.service";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private http: HttpClient, private ENV: EnvService) { }

  channelController:string = "/channel/";

  listChannel:BehaviorSubject<any> = new BehaviorSubject<any>([])
  channelName:BehaviorSubject<any> = new BehaviorSubject<any>([])
  listUser:BehaviorSubject<any> = new BehaviorSubject<any>([])
  listGroupesOfChannel:BehaviorSubject<any> = new BehaviorSubject<any>([])

  getAllChannel(){
    this.http
      .get(this.ENV.root + this.channelController)
      .subscribe( data => this.listChannel.next(data))
  }

  getAllUserByIdChannel(id:number){
    this.http
      .get<any>(this.ENV.root + this.channelController + 'allUserByIdChannel/' + id)
      .subscribe( data => this.listUser.next(data))
  }

  getNameChannelById(id:any){
    this.http
      .get(this.ENV.root + this.channelController + id)
      .subscribe( data => this.channelName.next(data))
  }

  getAllGroupeOfChannel(id:number){
    this.http.get<any>(this.ENV.root + '/groupe/' + 'allGroupeOfChannel/' + id)
      .subscribe( data => this.listGroupesOfChannel.next(data))
  }
}
