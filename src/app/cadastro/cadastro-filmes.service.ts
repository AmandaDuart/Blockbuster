import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from './cadastro-filmes';
const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t';

@Injectable({providedIn: 'root'})
export class CadastroParticipantesService{

    constructor(private http: HttpClient){ }

    listFromTurmas(turma: string){
        return this.http
            .get<Turma[]>(API+'/turma');
    }
}


