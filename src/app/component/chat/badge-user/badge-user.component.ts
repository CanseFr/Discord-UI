import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge-user',
  templateUrl: './badge-user.component.html',
  styleUrls: ['./badge-user.component.scss']
})
export class BadgeUserComponent {

  @Input() firstname: any
  @Input() lastname: any

}
