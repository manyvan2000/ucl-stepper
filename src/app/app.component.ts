import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  steps = [
    {id: 1, label:'one', status: 'completed'}, 
    {id: 2, label:'two', status: 'in-progress'}, 
    {id: 3, label:'three', status: 'incomplete'}, 
   
    
  ]
}
