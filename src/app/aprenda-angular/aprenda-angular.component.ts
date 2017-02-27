import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'aprenda-angular',
  templateUrl: './aprenda-angular.component.html',
  styleUrls: [ './aprenda-angular.component.css' ]
})
export class AprendaAngularComponent {

  constructor(private location: Location, private router: Router) {
  }


  solicitarDesconto() {
    window.location.href = 'http://eepurl.com/cA23Ff';
  }

}
