import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprendaAngularRoutingModule } from './aprenda-angular-routing.module';
import { ShareModule } from '../share/share.module';
import { AprendaAngularComponent } from './aprenda-angular.component';

@NgModule({
  imports: [
    CommonModule,
    AprendaAngularRoutingModule,
    ShareModule
  ],
  declarations: [ AprendaAngularComponent ]
})
export class AprendaAngularModule {
}
