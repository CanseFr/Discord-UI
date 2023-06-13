import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChannelService} from "../../service/__services/channel/channel.service";
import {ChatChannelService} from "../../service/__services/message/chat-channel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserImportUserComponent} from "../../component/modal/admin/user/user-import-user/user-import-user.component";
import {MatDialog} from "@angular/material/dialog";
import {ChatDownloadFileComponent} from "../../component/modal/chat/chat-download-file/chat-download-file.component";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  listUserOfChannel = this.channelService.listUser
  nameGroupe = this.channelService.channelName
  listMessage = this.messageSevice.messageList

  idChannel?:number

  userSendText?:string;
  private MessageDtoSendToControllerApi:any = {}





  constructor(private activatedRoute: ActivatedRoute, private channelService: ChannelService, private messageSevice: ChatChannelService,private formBuilder: FormBuilder,public dialog: MatDialog) {
  }




  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( param => {
        this.channelService.getNameChannelById(param['id'])
        this.channelService.getAllUserByIdChannel(param['id'])
        this.messageSevice.getAllUserByIdGroupe(param['id'])

      this.idChannel = param['id']
      }
    )
  }

  uploadFile() {
    const dialogRef = this.dialog.open(ChatDownloadFileComponent);
  }

  async getTextUserSending(){
    if ( this.userSendText === '' || this.userSendText === ' ' || this.userSendText === '  ' || this.userSendText === '   ' ){
      // Vider input text
      this.userSendText = '';
    } else {
      // Recuperation information de l'envoyeur
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token')
      const decodedToken = helper.decodeToken(token!)
      // Construction Objet
      this.MessageDtoSendToControllerApi.sentAt = new Date();
      this.MessageDtoSendToControllerApi.content = this.userSendText;
      this.MessageDtoSendToControllerApi.userId = decodedToken.userId;
      this.MessageDtoSendToControllerApi.channelId = this.idChannel;
      // Service
      console.log(this.MessageDtoSendToControllerApi)
      this.messageSevice.addMessageToChannel(this.MessageDtoSendToControllerApi)
      // Vider input text
      this.userSendText = '';
    }
  }

}
