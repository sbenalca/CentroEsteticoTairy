import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../informacion.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-serviceDash',
  templateUrl: './serviceDash.component.html',
  styleUrls: ['./serviceDash.component.css']
})
export class ServiceDashComponent implements OnInit {
  servicios;
  tipos;

  constructor(private informacionService: InformacionService) { }

  getTratamientos(): void{
    const observablesList = [];
    this.informacionService.getTratamientos().subscribe((data: any)=>{
      this.servicios=data;
      this.servicios.forEach(s => {
        observablesList.push(this.informacionService.getTipo(s.idtiposervicio));
      });
      forkJoin(observablesList).subscribe((data:any) => {
        this.tipos=data;
      });
    })
  }


  trackByOption(index, option) {
    return option;
  } 

  ngOnInit() {
    this.getTratamientos();
  }

}
