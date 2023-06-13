import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "../env.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatChannelService {

  constructor(private http: HttpClient, private ENV: EnvService) { }

  // BEHAV OBJECT
  public messageList: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  // END POINT
  messageController:string = "/message/";

  // GET ALL MESSAGE BY ID CHANNEL
  getAllUserByIdGroupe(idChannel:number){
    this.http
      .get(this.ENV.root + this.messageController + 'getMessageByIdChannel/' + idChannel)
      .subscribe( data => this.messageList.next(data))
  }

  addMessageToChannel(body:any){
    this.http
      .post<any>(this.ENV.root + this.messageController ,body)
      .subscribe( x => this.getAllUserByIdGroupe(body.channelId) )
  }
}
