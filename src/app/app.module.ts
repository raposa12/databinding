import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';//trabalha o formulario reativo

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioreativosComponent } from './formularioreativos/formularioreativos.component';
import { FormularioreativogrupoComponent } from './formularioreativogrupo/formularioreativogrupo.component';
import { FormulariogrupoaninhadoComponent } from './formulariogrupoaninhado/formulariogrupoaninhado.component';
import { FormulariomodeloComponent } from './formulariomodelo/formulariomodelo.component';
import { DiretivaemailDirective } from './formulariomodelo/diretivaemail.directive';
import { ObservablesComponent } from './observables/observables.component';
import { PessoaComponent } from './pessoa/pessoa.component';



@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    ClassbindingComponent,
    InputComponent,
    OutputComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    LifecycleComponent,
    FormularioComponent,
    FormularioreativosComponent,
    FormularioreativogrupoComponent,
    FormulariogrupoaninhadoComponent,
    FormulariomodeloComponent,
    DiretivaemailDirective,
    ObservablesComponent,
    PessoaComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
