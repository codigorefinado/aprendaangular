import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ShareModule } from './share/share.module';
import { AprendaAngularModule } from './aprenda-angular/aprenda-angular.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ShareModule,
    AprendaAngularModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
