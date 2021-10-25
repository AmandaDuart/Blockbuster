import { Participante } from "../listafilmes/listafilmes";


export interface Turma{
  nome:string;
  ano: number;
  genero: string;
  diretor: string;
  descricao: string;
  poster: string;
  participantes:Participante[];
}
