import { Participante } from '../listafilmes/listafilmes';
import { CadastroParticipantesService } from './cadastro-filmes.service';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroParticipantesComponent implements OnInit{

  nome:string = '';
  ano: number = 0;
  diretor: string = '';
  genero: string = '';
  descricao : string = '';


    cadastrar(){
      console.log('Participante Cadastrado com Sucesso');
      console.log('nome:', this.nome);

    }


    constructor(private CadastroParticipantesService: CadastroParticipantesService){
     }

    ngOnInit(): void {
      this.CadastroParticipantesService
        .listFromTurmas('turma')
      };


  }

