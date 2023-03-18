import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { BasicsComponent } from './components/basics/basics.component';
import { DynamicsComponent } from './components/dynamics/dynamics.component';
import { SwitchesComponent } from './components/switches/switches.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
