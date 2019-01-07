import {Component, Input } from '@angular/core'; 


@Component({
  selector: 'bt-stepper',
  templateUrl: './bt-stepper.component.html', 
  styleUrls: ['./bt-stepper.component.css']
})
export class BtStepper {
  @Input() steps: any; 
  @Input() currentStep: any; 
  
}