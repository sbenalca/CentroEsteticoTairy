import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  comentarios=[];

  
  constructor() { 
    fetch("url de comentarios")
    .then(res => res.json())
    .then(obj => (this.comentarios=obj))
    .catch(err => console.log(err));
  }

  ngOnInit(): void {
  }

}
