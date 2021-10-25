import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaParticipantesComponent} from './listafilmes/listafilmes.component'
import {CadastroParticipantesComponent} from './cadastro/cadastro-filmes.component'
import { Home} from './home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: Home },
  {path: 'listaParticipantes', component: ListaParticipantesComponent },
  {path: 'cadastroParticipantes', component: CadastroParticipantesComponent},
  {path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
