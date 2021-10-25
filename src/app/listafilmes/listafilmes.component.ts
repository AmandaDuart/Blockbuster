import { ListaParticipantesService } from './listafilmes.service';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Participante } from './listafilmes';

const API = 'https://tranquil-dawn-87865.herokuapp.com/movies';


@Component({
  selector: 'listafilmes',
  templateUrl: './listafilmes.component.html',
  styleUrls: ['./listafilmes.component.css']
})
export class ListaParticipantesComponent  implements OnInit{
  participantes: Participante[] = [];

  inserirParticipantes(p: Participante): String{
    this.inserirParticipantes(p);
    return "";
  }

    constructor(private listaParticipantesService : ListaParticipantesService){
     }

    ngOnInit(): void {
      this.listaParticipantesService
      .listFromParticipantes()
      .subscribe(participantes => {
        console.log(participantes);
        this.participantes = participantes
        console.log('miau',this.participantes);
      });

  }
}
