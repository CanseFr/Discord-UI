import {Component, Input} from '@angular/core';

export interface LightBadgeInfoInput{
  title? : string,
  picto? : number,
  indexInfo? : number,
  url?:string
}
@Component({
  selector: 'app-badge-groupe',
  templateUrl: './badge-groupe.component.html',
  styleUrls: ['./badge-groupe.component.scss']
})
export class BadgeGroupeComponent {

  @Input() titreBadge?:LightBadgeInfoInput
  @Input() indexParent?:number;
  @Input() indexInfo?:LightBadgeInfoInput;

}
