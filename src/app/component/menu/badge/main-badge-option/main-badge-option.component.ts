import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-badge-option',
  templateUrl: './main-badge-option.component.html',
  styleUrls: ['./main-badge-option.component.scss']
})
export class MainBadgeOptionComponent {
  @Input() titreBadge?:any
  @Input() pictoBadge?:any
  @Input() indexParent?:number;
  @Input() indexInfo?:any;

}
