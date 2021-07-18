import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent {
  hide1: boolean = true
  hide2: boolean = true
  hide3: boolean = true
  hide4: boolean = true
  hide5: boolean = true
  hide6: boolean = true

  spanPlusHide1: boolean = false;
  spanPlusHide2: boolean = false;
  spanPlusHide3: boolean = false;
  spanPlusHide4: boolean = false;
  spanPlusHide5: boolean = false;
  spanPlusHide6: boolean = false;

  spanMinusShow1: boolean = false
  spanMinusShow2: boolean = false
  spanMinusShow3: boolean = false
  spanMinusShow4: boolean = false
  spanMinusShow5: boolean = false
  spanMinusShow6: boolean = false
}
