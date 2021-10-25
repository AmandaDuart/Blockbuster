import { ListaParticipantesComponent } from './listafilmes.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
      ListaParticipantesComponent
    ],
    exports: [
      ListaParticipantesComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ],
})
export class ListaParticipantesModule {
}
