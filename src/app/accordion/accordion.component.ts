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

  showMinusIcon: boolean = false
}
