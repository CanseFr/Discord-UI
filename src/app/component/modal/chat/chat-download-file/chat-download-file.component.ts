import { Component } from '@angular/core';
import {ChannelService} from "../../../../service/__services/channel/channel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat-download-file',
  templateUrl: './chat-download-file.component.html',
  styleUrls: ['./chat-download-file.component.scss']
})
export class ChatDownloadFileComponent {
  constructor(private formBuilder: FormBuilder) {}


  formulaire:FormGroup = this.formBuilder.group({
  })




  onSubmit(){
  }
}
