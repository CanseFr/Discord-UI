import {Component, Input} from '@angular/core';

export interface LightBadgeInfoInput{
  title? : string,
  picto? : number,
  indexInfo? : number,
  url?:string
}
@Component({
  selector: 'app-badge-channel',
  templateUrl: './badge-channel.component.html',
  styleUrls: ['./badge-channel.component.scss']
})
export class BadgeChannelComponent {

  @Input() titreBadge?:LightBadgeInfoInput
  @Input() pictoBadge?:LightBadgeInfoInput
  @Input() indexParent?:number;
  @Input() indexInfo?:LightBadgeInfoInput;

}
