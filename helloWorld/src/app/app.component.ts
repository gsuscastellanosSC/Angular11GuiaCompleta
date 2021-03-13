import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jesus'
  
  constructor(){
    setInterval(()=>this.name = 'Sc', 3000);
  }
  
  getSuma(n1 : number, n2: number){
    return n1+n2;
  }
}
