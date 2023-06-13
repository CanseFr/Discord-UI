import {Component, Input} from '@angular/core';
import {ChannelService} from "../../../service/__services/channel/channel.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-badge-document',
  templateUrl: './badge-document.component.html',
  styleUrls: ['./badge-document.component.scss']
})
export class BadgeDocumentComponent {
  @Input() picto!:string
  @Input() titreDoc!:string





  onSubmit(){

  }

}
