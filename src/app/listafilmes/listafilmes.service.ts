import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante} from './listafilmes';
const API = 'https://tranquil-dawn-87865.herokuapp.com/movies';

@Injectable({providedIn: 'root'})
export class ListaParticipantesService{

    constructor(private http: HttpClient){ }

    listFromParticipantes(){
      return this.http
        .get<Participante[]>(API);

    }

    insertParticipantes(p : Participante){
        return this.http
        .post<Participante>(API, p);
    }
}

