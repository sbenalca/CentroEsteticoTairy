import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CET';
  comentarios=[];

  constructor(){
    fetch("")
    .then(res => res.json())
    .then(obj => (this.comentarios=obj))
    .catch(err => console.log(err));
  }


}
