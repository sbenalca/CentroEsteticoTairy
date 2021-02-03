import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../reportes.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  comentarios;
  usuarios;
  fecha;

  constructor(private reportesService: ReportesService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(): void{
    const observablesList = [];
    this.reportesService.getComentarios().subscribe((data: any)=>{
      this.comentarios=data;
      this.comentarios.forEach(com => {
        observablesList.push(this.reportesService.getUsuario(com.id_usuario));
      });
      forkJoin(observablesList).subscribe((data:any) => {
        this.usuarios=data;
      });
    })
  }

  trackByOption(index, option) {
    return option;
  } 

}
